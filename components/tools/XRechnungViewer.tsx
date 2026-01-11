import React, { useState, useEffect } from 'react';
import { FileText, Building2, Calendar, CreditCard, ShoppingCart, ArrowLeft, Download, Printer, Banknote, MapPin, Receipt, ShieldCheck } from 'lucide-react';

interface XRechnungViewerProps {
    file: File;
    onClose: () => void;
    t: any;
}

interface InvoiceData {
    buyer: Party;
    seller: Party;
    metadata: InvoiceMetadata;
    items: LineItem[];
    totals: InvoiceTotals;
    payment: PaymentInfo;
}

interface Party {
    name: string;
    street: string;
    city: string;
    zip: string;
    country: string;
    id?: string;
    vatId?: string;
    email?: string;
}

interface InvoiceMetadata {
    id: string;
    date: string; // YYYY-MM-DD
    dueDate?: string;
    type: string;
    currency: string;
}

interface LineItem {
    id: string;
    description: string;
    quantity: number;
    unit: string;
    price: number;
    total: number;
    taxPercent?: number;
}

interface InvoiceTotals {
    tax: number;
    net: number;
    gross: number;
    paid?: number;
    due?: number;
}

interface PaymentInfo {
    iban?: string;
    bic?: string;
    bankName?: string;
    terms?: string;
    reference?: string;
}

export const XRechnungViewer: React.FC<XRechnungViewerProps> = ({ file, onClose, t }) => {
    const [data, setData] = useState<InvoiceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const parseXml = async () => {
            try {
                const text = await file.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");

                if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
                    throw new Error(t.errorInvalidXml || "Invalid XML file format");
                }

                // --- Helpers ---
                const getVal = (parent: Element | Document | null, ...tags: string[]) => {
                    if (!parent) return "";
                    for (const tag of tags) {
                        const node = parent.getElementsByTagName(tag)[0] ||
                            parent.getElementsByTagName("cbc:" + tag)[0] ||
                            parent.getElementsByTagName("ram:" + tag)[0] ||
                            parent.getElementsByTagName("udt:" + tag)[0];
                        if (node && node.textContent) return node.textContent.trim();
                    }
                    return "";
                };

                const getAttr = (parent: Element | Document | null, tag: string, attr: string) => {
                    if (!parent) return "";
                    const node = parent.getElementsByTagName(tag)[0] ||
                        parent.getElementsByTagName("cbc:" + tag)[0] ||
                        parent.getElementsByTagName("ram:" + tag)[0];
                    return node?.getAttribute(attr) || "";
                };

                const isCII = xmlDoc.getElementsByTagName("rsm:CrossIndustryInvoice").length > 0;

                // Initialize Data
                let seller: Party = { name: "", street: "", city: "", zip: "", country: "" };
                let buyer: Party = { name: "", street: "", city: "", zip: "", country: "" };
                let metadata: InvoiceMetadata = {
                    id: "",
                    date: new Date().toISOString().split('T')[0],
                    type: "Invoice",
                    currency: "EUR"
                };
                let items: LineItem[] = [];
                let totals: InvoiceTotals = { tax: 0, net: 0, gross: 0 };
                let payment: PaymentInfo = {};

                if (isCII) {
                    // --- CII Parsing ---
                    const header = xmlDoc.getElementsByTagName("rsm:ExchangedDocument")[0];
                    metadata.id = getVal(header, "ID");
                    metadata.type = getVal(header, "TypeCode");

                    // Dates
                    const issueDateParams = header?.getElementsByTagName("ram:IssueDateTime")[0];
                    const rawDate = getVal(issueDateParams, "DateTimeString");
                    if (rawDate && rawDate.length === 8) {
                        metadata.date = `${rawDate.substring(0, 4)}-${rawDate.substring(4, 6)}-${rawDate.substring(6, 8)}`;
                    }

                    // Parties
                    const tradeAgreement = xmlDoc.getElementsByTagName("ram:ApplicableHeaderTradeAgreement")[0];
                    const sellerNode = tradeAgreement?.getElementsByTagName("ram:SellerTradeParty")[0];
                    if (sellerNode) {
                        seller.name = getVal(sellerNode, "Name");
                        seller.id = getVal(sellerNode, "ID");
                        const addr = sellerNode.getElementsByTagName("ram:PostalTradeAddress")[0];
                        if (addr) {
                            seller.street = getVal(addr, "LineOne") || getVal(addr, "LineTwo") || getVal(addr, "LineThree");
                            seller.city = getVal(addr, "CityName");
                            seller.zip = getVal(addr, "PostcodeCode");
                            seller.country = getVal(addr, "CountryID");
                        }
                        const tax = sellerNode.getElementsByTagName("ram:SpecifiedTaxRegistration")[0];
                        seller.vatId = getVal(tax, "ID");
                    }

                    const buyerNode = tradeAgreement?.getElementsByTagName("ram:BuyerTradeParty")[0];
                    if (buyerNode) {
                        buyer.name = getVal(buyerNode, "Name");
                        buyer.id = getVal(buyerNode, "ID");
                        const addr = buyerNode.getElementsByTagName("ram:PostalTradeAddress")[0];
                        if (addr) {
                            buyer.street = getVal(addr, "LineOne");
                            buyer.city = getVal(addr, "CityName");
                            buyer.zip = getVal(addr, "PostcodeCode");
                            buyer.country = getVal(addr, "CountryID");
                        }
                    }

                    // Settlement (Payment & Totals)
                    const settlement = xmlDoc.getElementsByTagName("ram:ApplicableHeaderTradeSettlement")[0];
                    metadata.currency = getVal(settlement, "InvoiceCurrencyCode") || "EUR";

                    // Payment Terms
                    const terms = settlement?.getElementsByTagName("ram:SpecifiedTradePaymentTerms")[0];
                    payment.terms = getVal(terms, "Description");
                    const dueDateParams = terms?.getElementsByTagName("ram:DueDateDateTime")[0];
                    const rawDueDate = getVal(dueDateParams, "DateTimeString");
                    if (rawDueDate && rawDueDate.length === 8) {
                        metadata.dueDate = `${rawDueDate.substring(0, 4)}-${rawDueDate.substring(4, 6)}-${rawDueDate.substring(6, 8)}`;
                    }

                    // Bank Info
                    const bank = settlement?.getElementsByTagName("ram:SpecifiedTradeSettlementPaymentMeans")[0]?.getElementsByTagName("ram:PayeePartyCreditorFinancialAccount")[0];
                    if (bank) {
                        payment.iban = getVal(bank, "IBANID");
                        payment.bankName = getVal(bank, "AccountName");
                    }
                    const bicNode = settlement?.getElementsByTagName("ram:SpecifiedTradeSettlementPaymentMeans")[0]?.getElementsByTagName("ram:PayeeSpecifiedCreditorFinancialInstitution")[0];
                    if (bicNode) {
                        payment.bic = getVal(bicNode, "BICID");
                    }

                    // Totals
                    const summation = settlement?.getElementsByTagName("ram:SpecifiedTradeSettlementHeaderMonetarySummation")[0];
                    if (summation) {
                        totals.net = parseFloat(getVal(summation, "TaxBasisTotalAmount")) || 0;
                        totals.tax = parseFloat(getVal(summation, "TaxTotalAmount")) || 0;
                        totals.gross = parseFloat(getVal(summation, "GrandTotalAmount")) || 0;
                        totals.due = parseFloat(getVal(summation, "DuePayableAmount")) || totals.gross;
                    }

                    // Line Items
                    const lines = xmlDoc.getElementsByTagName("ram:IncludedSupplyChainTradeLineItem");
                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i];
                        const doc = line.getElementsByTagName("ram:AssociatedDocumentLineDocument")[0];
                        const prod = line.getElementsByTagName("ram:SpecifiedTradeProduct")[0];
                        const agreement = line.getElementsByTagName("ram:SpecifiedLineTradeAgreement")[0];
                        const delivery = line.getElementsByTagName("ram:SpecifiedLineTradeDelivery")[0];
                        const lineSettlement = line.getElementsByTagName("ram:SpecifiedLineTradeSettlement")[0];

                        const quantity = parseFloat(getVal(delivery, "BilledQuantity")) || 0;
                        const unit = delivery?.getElementsByTagName("ram:BilledQuantity")[0]?.getAttribute("unitCode") || "";

                        const netPriceNode = agreement?.getElementsByTagName("ram:NetPriceProductTradePrice")[0];
                        const price = parseFloat(getVal(netPriceNode, "ChargeAmount")) || 0;

                        const taxNode = lineSettlement?.getElementsByTagName("ram:ApplicableTradeTax")[0];
                        const taxPercent = parseFloat(getVal(taxNode, "RateApplicablePercent")) || 0;

                        const lineSummation = lineSettlement?.getElementsByTagName("ram:SpecifiedTradeSettlementLineMonetarySummation")[0];
                        const total = parseFloat(getVal(lineSummation, "LineTotalAmount")) || (quantity * price);

                        items.push({
                            id: getVal(doc, "LineID") || (i + 1).toString(),
                            description: getVal(prod, "Name"),
                            quantity,
                            unit,
                            price,
                            total,
                            taxPercent
                        });
                    }

                } else {
                    // --- UBL Parsing ---
                    metadata.id = getVal(xmlDoc, "ID");
                    metadata.date = getVal(xmlDoc, "IssueDate");
                    metadata.dueDate = getVal(xmlDoc, "DueDate");
                    metadata.type = getVal(xmlDoc, "InvoiceTypeCode");
                    metadata.currency = getVal(xmlDoc, "DocumentCurrencyCode");

                    // Helpers for UBL Party
                    const extractUBLParty = (partyNode: Element | null): Party => {
                        if (!partyNode) return { name: "", street: "", city: "", zip: "", country: "" };

                        const name = getVal(partyNode.getElementsByTagName("cac:PartyName")[0], "Name") ||
                            getVal(partyNode.getElementsByTagName("cac:PartyLegalEntity")[0], "RegistrationName");
                        const vatId = getVal(partyNode.getElementsByTagName("cac:PartyTaxScheme")[0], "CompanyID");
                        const email = getVal(partyNode.getElementsByTagName("cac:Contact")[0], "ElectronicMail");

                        const addr = partyNode.getElementsByTagName("cac:PostalAddress")[0];
                        let street = "", city = "", zip = "", country = "";
                        if (addr) {
                            street = getVal(addr, "StreetName");
                            const building = getVal(addr, "BuildingNumber");
                            if (building) street += " " + building;
                            city = getVal(addr, "CityName");
                            zip = getVal(addr, "PostalZone");
                            country = getVal(addr.getElementsByTagName("cac:Country")[0], "IdentificationCode");
                        }
                        return { name, street, city, zip, country, vatId, email };
                    };

                    seller = extractUBLParty(xmlDoc.getElementsByTagName("cac:AccountingSupplierParty")[0]?.getElementsByTagName("cac:Party")[0]);
                    buyer = extractUBLParty(xmlDoc.getElementsByTagName("cac:AccountingCustomerParty")[0]?.getElementsByTagName("cac:Party")[0]);

                    // Payment Means
                    const paymentMeans = xmlDoc.getElementsByTagName("cac:PaymentMeans")[0];
                    if (paymentMeans) {
                        payment.terms = getVal(xmlDoc.getElementsByTagName("cac:PaymentTerms")[0], "Note");
                        const account = paymentMeans.getElementsByTagName("cac:PayeeFinancialAccount")[0];
                        if (account) {
                            payment.iban = getVal(account, "ID");
                            payment.bankName = getVal(account, "Name");
                            payment.bic = getVal(account.getElementsByTagName("cac:FinancialInstitutionBranch")[0], "ID");
                        }
                        payment.reference = getVal(paymentMeans, "PaymentID");
                    }

                    // Totals
                    const taxTotal = xmlDoc.getElementsByTagName("cac:TaxTotal")[0];
                    totals.tax = parseFloat(getVal(taxTotal, "TaxAmount")) || 0;

                    const legalTotal = xmlDoc.getElementsByTagName("cac:LegalMonetaryTotal")[0];
                    if (legalTotal) {
                        totals.net = parseFloat(getVal(legalTotal, "TaxExclusiveAmount")) || 0;
                        totals.gross = parseFloat(getVal(legalTotal, "PayableAmount")) || 0;
                        totals.due = parseFloat(getVal(legalTotal, "PayableAmount")) || 0;
                    }

                    // Lines
                    const lines = xmlDoc.getElementsByTagName("cac:InvoiceLine");
                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i];
                        const item = line.getElementsByTagName("cac:Item")[0];
                        const priceNode = line.getElementsByTagName("cac:Price")[0];

                        const quantity = parseFloat(getVal(line, "InvoicedQuantity")) || 0;
                        const unit = getAttr(line, "InvoicedQuantity", "unitCode");
                        const price = parseFloat(getVal(priceNode, "PriceAmount")) || 0;
                        const total = parseFloat(getVal(line, "LineExtensionAmount")) || 0;

                        // Try to find tax per line if available
                        const taxCat = item?.getElementsByTagName("cac:ClassifiedTaxCategory")[0];
                        const taxPercent = parseFloat(getVal(taxCat, "Percent")) || 0;

                        items.push({
                            id: getVal(line, "ID"),
                            description: getVal(item, "Name") || getVal(item, "Description"),
                            quantity,
                            unit,
                            price,
                            total,
                            taxPercent
                        });
                    }
                }

                setData({ buyer, seller, metadata, items, totals, payment });
                setLoading(false);

            } catch (err: any) {
                console.error(err);
                setError(err.message || t.errorParsingInvalid || "Unable to parse this file. It might not be a valid XRechnung/UBL XML.");
                setLoading(false);
            }
        };

        if (file) {
            parseXml();
        }
    }, [file, t]);

    const formatCurrency = (amount: number, currency: string) => {
        return new Intl.NumberFormat(undefined, { style: 'currency', currency: currency }).format(amount);
    };

    const formatDate = (dateStr?: string) => {
        if (!dateStr) return "";
        try {
            return new Date(dateStr).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
        } catch {
            return dateStr;
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="w-16 h-16 border-4 border-canada-red border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-gray-500 font-medium animate-pulse">{t.processing || "Analyzing XRechnung Structure..."}</p>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="flex flex-col items-center justify-center p-8 h-full min-h-[400px] text-center max-w-md mx-auto">
                <div className="w-20 h-20 bg-red-50 text-canada-red rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-red-100">
                    <FileText size={40} className="stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{t.errorTitle || "Could not read invoice"}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    {error}
                </p>
                <button
                    onClick={onClose}
                    className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-lg active:scale-95"
                >
                    {t.btnTryAgain || "Try Another File"}
                </button>
            </div>
        );
    }

    return (
        <div className="w-full h-full bg-gray-50/50 flex flex-col items-center overflow-auto custom-scrollbar">
            <div className="w-full max-w-5xl bg-white shadow-2xl md:my-8 md:rounded-3xl overflow-hidden border border-gray-100 min-h-[100vh] md:min-h-[auto] flex flex-col animate-fade-in-up">

                {/* Fixed Toolbar */}
                <div className="bg-gray-900 text-white p-4 flex justify-between items-center no-print sticky top-0 z-50 shadow-md">
                    <button onClick={onClose} className="flex items-center gap-2 hover:bg-white/10 px-4 py-2 rounded-full transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">{t.back || "Back"}</span>
                    </button>
                    <div className="flex gap-2">
                        <button onClick={() => window.print()} className="flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-full transition-colors font-bold shadow-lg shadow-white/10 active:scale-95">
                            <Printer size={18} />
                            <span className="hidden sm:inline">{t.print || "Print / PDF"}</span>
                        </button>
                    </div>
                </div>

                {/* Printable Area */}
                <div className="p-8 md:p-16 flex-grow print:p-0 print:shadow-none" id="invoice-content">

                    {/* Invoice Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-canada-red">
                                <Receipt size={32} className="stroke-[2]" />
                                <span className="font-bold tracking-widest uppercase text-xs bg-red-50 px-2 py-1 rounded-md border border-red-100">XRechnung / UBL 2.1</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter">{t.invoice || "INVOICE"}</h1>
                            <p className="text-gray-500 font-medium text-lg">#{data.metadata.id}</p>
                        </div>
                        <div className="text-right">
                            <div className="inline-block bg-gray-50 px-8 py-4 rounded-2xl border border-gray-100">
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{t.amountDue || "Total Amount Due"}</div>
                                <div className="text-3xl font-black text-canada-red">{formatCurrency(data.totals.due || data.totals.gross, data.metadata.currency)}</div>
                                {data.metadata.dueDate && (
                                    <div className="text-xs font-medium text-gray-500 mt-2 flex items-center justify-end gap-1">
                                        <Calendar size={12} /> {t.due || 'Due'}: {formatDate(data.metadata.dueDate)}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Parties Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative">
                        {/* Decorative line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100"></div>

                        {/* Seller */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <Building2 size={16} /> {t.from || "From"}
                            </h3>
                            <div className="text-gray-900">
                                <p className="font-extrabold text-2xl mb-2">{data.seller.name}</p>
                                <div className="space-y-1 text-gray-600 font-medium">
                                    <p>{data.seller.street}</p>
                                    <p>{data.seller.zip} {data.seller.city}</p>
                                    <p>{data.seller.country}</p>
                                </div>
                                {data.seller.vatId && (
                                    <p className="text-sm text-gray-400 mt-4 flex items-center gap-2">
                                        <ShieldCheck size={14} /> {t.vatId || 'VAT ID'}: {data.seller.vatId}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Buyer */}
                        <div className="space-y-6 md:pl-12">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <CreditCard size={16} /> {t.to || "Bill To"}
                            </h3>
                            <div className="text-gray-900">
                                <p className="font-extrabold text-2xl mb-2">{data.buyer.name}</p>
                                <div className="space-y-1 text-gray-600 font-medium">
                                    <p>{data.buyer.street}</p>
                                    <p>{data.buyer.zip} {data.buyer.city}</p>
                                    <p>{data.buyer.country}</p>
                                </div>
                                {data.buyer.id && (
                                    <p className="text-sm text-gray-400 mt-4">{t.customerId || 'Customer ID'}: {data.buyer.id}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Info Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                        <div className="space-y-1">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.invoiceDate || "Issue Date"}</div>
                            <div className="font-bold text-lg">{formatDate(data.metadata.date)}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.type || "Invoice Type"}</div>
                            <div className="font-bold text-lg">{data.metadata.type}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.ref || "Reference"}</div>
                            <div className="font-bold text-lg truncate" title={data.payment.reference}>{data.payment.reference || "-"}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.currency || "Currency"}</div>
                            <div className="font-bold text-lg">{data.metadata.currency}</div>
                        </div>
                    </div>

                    {/* Items Table */}
                    <div className="mb-12">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-900">
                                    <th className="py-4 pr-4 font-black text-gray-900 uppercase tracking-wider text-xs w-1/2">{t.description || "Description"}</th>
                                    <th className="py-4 px-4 text-center font-black text-gray-900 uppercase tracking-wider text-xs">{t.quantity || "Qty"}</th>
                                    <th className="py-4 px-4 text-right font-black text-gray-900 uppercase tracking-wider text-xs">{t.price || "Price"}</th>
                                    <th className="py-4 px-4 text-right font-black text-gray-900 uppercase tracking-wider text-xs">{t.tax || "Tax"}</th>
                                    <th className="py-4 pl-4 text-right font-black text-gray-900 uppercase tracking-wider text-xs">{t.total || "Total"}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {data.items.map((item, idx) => (
                                    <tr key={idx} className="group">
                                        <td className="py-6 pr-4 align-top">
                                            <div className="font-bold text-gray-900 text-lg group-hover:text-canada-red transition-colors">{item.description}</div>
                                            {item.id && <div className="text-xs text-gray-400 mt-1 font-mono">{t.sku || 'Sku'}: {item.id}</div>}
                                        </td>
                                        <td className="py-6 px-4 text-center align-top font-medium text-gray-600">
                                            {item.quantity} <span className="text-xs text-gray-400">{item.unit}</span>
                                        </td>
                                        <td className="py-6 px-4 text-right align-top font-medium text-gray-600 whitespace-nowrap">
                                            {formatCurrency(item.price, data.metadata.currency)}
                                        </td>
                                        <td className="py-6 px-4 text-right align-top font-medium text-gray-600 whitespace-nowrap">
                                            {item.taxPercent ? `${item.taxPercent}%` : "-"}
                                        </td>
                                        <td className="py-6 pl-4 text-right align-top font-bold text-gray-900 whitespace-nowrap">
                                            {formatCurrency(item.total, data.metadata.currency)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Section: Banking & Totals */}
                    <div className="flex flex-col md:flex-row gap-12 border-t border-gray-200 pt-12">
                        {/* Left: Banking & Terms */}
                        <div className="flex-1 space-y-8">
                            {data.payment.terms && (
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                        <FileText size={16} /> {t.paymentTerms || "Payment Terms"}
                                    </h4>
                                    <p className="text-blue-800 text-sm leading-relaxed">{data.payment.terms}</p>
                                </div>
                            )}

                            {(data.payment.iban || data.payment.bankName) && (
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs flex items-center gap-2">
                                        <Banknote size={16} /> {t.paymentDetails || "Payment Details"}
                                    </h4>
                                    <div className="text-sm space-y-2 text-gray-600">
                                        {data.payment.bankName && (
                                            <div className="flex justify-between max-w-xs border-b border-gray-100 pb-1">
                                                <span>{t.bank || 'Bank'}:</span>
                                                <span className="font-medium text-gray-900">{data.payment.bankName}</span>
                                            </div>
                                        )}
                                        {data.payment.iban && (
                                            <div className="flex justify-between max-w-xs border-b border-gray-100 pb-1">
                                                <span>{t.iban || 'IBAN'}:</span>
                                                <span className="font-mono font-medium text-gray-900">{data.payment.iban}</span>
                                            </div>
                                        )}
                                        {data.payment.bic && (
                                            <div className="flex justify-between max-w-xs border-b border-gray-100 pb-1">
                                                <span>{t.bicSwift || 'BIC/SWIFT'}:</span>
                                                <span className="font-mono font-medium text-gray-900">{data.payment.bic}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right: Totals */}
                        <div className="w-full md:w-1/3">
                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span>{t.subtotal || "Net Total"}</span>
                                    <span>{formatCurrency(data.totals.net, data.metadata.currency)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-medium pb-4 border-b border-gray-100">
                                    <span>{t.tax || "Tax / VAT"}</span>
                                    <span>{formatCurrency(data.totals.tax, data.metadata.currency)}</span>
                                </div>
                                <div className="flex justify-between text-2xl font-black text-gray-900 py-2">
                                    <span>{t.total || "Total"}</span>
                                    <span>{formatCurrency(data.totals.gross, data.metadata.currency)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-400 print:hidden">
                    <span className="flex items-center justify-center gap-2">
                        <ShieldCheck size={14} />
                        {t.secureProcessing || 'Processed securely in your browser. No data is uploaded to any server.'}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default XRechnungViewer;
