'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is Code 128 and why should I use it?",
        answer: "Code 128 is a highly versatile linear barcode format created in 1981 that can encode the complete ASCII character set - all letters (upper and lowercase), numbers, symbols, and control characters. It's ideal when you need compact, high-density barcodes for alphanumeric data. Compared to older formats like Code 39, Code 128 produces significantly shorter barcodes while encoding more information, making it perfect for shipping labels, inventory tracking, and product identification."
    },
    {
        question: "How do I generate Code 128 barcodes in bulk?",
        answer: "Our free Code 128 generator offers three easy ways to create barcodes in bulk: (1) Use the sequence generator to create numbered series like BC001-BC999 with custom prefixes and suffixes, (2) Upload an Excel or CSV file with your barcode data in the first column, or (3) Manually add multiple barcodes one by one. All methods let you export your barcodes as individual PNG/SVG files or combine them into a single multi-page PDF."
    },
    {
        question: "What's the difference between Code 128A, 128B, and 128C?",
        answer: "Code 128 has three character subsets optimized for different data types. Code 128A encodes uppercase letters and control characters (perfect for shipping labels with special formatting). Code 128B handles both upper and lowercase letters plus symbols (best for general text). Code 128C only encodes numeric pairs and is the most compact option for numbers-only data like serial numbers. Our 'Auto' setting intelligently switches between subsets to create the shortest possible barcode."
    },
    {
        question: "Can I customize my Code 128 barcode appearance?",
        answer: "Yes! Our generator provides professional customization options including adjustable bar width (1-5px), barcode height (50-200px), font size for the human-readable text, custom background and bar colors, text margin spacing, and the option to hide the text entirely for label designs. These settings help you create barcodes that match your product packaging, shipping labels, or documentation requirements."
    },
    {
        question: "What file formats can I export my barcodes to?",
        answer: "We support three export formats optimized for different use cases: PNG (perfect for web use, printing, and inserting into documents), SVG (scalable vector format that maintains quality at any size - ideal for professional printing), and PDF (multi-page documents with one barcode per page, great for batch printing labels or archiving). Single barcodes can be downloaded individually or copied directly to your clipboard."
    },
    {
        question: "Are Code 128 barcodes compatible with standard barcode scanners?",
        answer: "Absolutely! Code 128 is one of the most widely supported barcode formats. Any modern barcode scanner, smartphone app, or point-of-sale system can read Code 128 barcodes. The format includes built-in error checking (modulo-103 checksum) to ensure accurate scanning even if parts of the barcode are damaged or dirty. It's also bidirectional, meaning it scans correctly from either left-to-right or right-to-left."
    },
    {
        question: "What industries commonly use Code 128 barcodes?",
        answer: "Code 128 is the industry standard for logistics and shipping (UPS, FedEx, DHL all use Code 128 for tracking labels), warehouse management and inventory systems, manufacturing and production line tracking, healthcare (patient wristbands, specimen tracking, pharmaceutical packaging), retail point-of-sale systems, and airline boarding passes. Its compact size and high data capacity make it ideal whenever you need to encode detailed information in limited space."
    },
    {
        question: "Is this Code 128 generator really free?",
        answer: "Yes, our Code 128 barcode generator is completely free with no hidden fees, watermarks, or usage limits. Generate as many barcodes as you need - whether it's 1 or 10,000. All processing happens locally in your browser for privacy and security, and you can export unlimited PNG, SVG, or PDF files. We built this tool to help businesses and individuals create professional barcodes without expensive software subscriptions."
    },
    {
        question: "How does Code 128 compare to QR codes?",
        answer: "Code 128 and QR codes serve different purposes. Code 128 is a 1D linear barcode that's ideal for simple alphanumeric data like product codes, serial numbers, and tracking numbers - it's compact, highly scannable by all barcode scanners, and takes up minimal vertical space on labels. QR codes are 2D and can store much more data (URLs, paragraphs of text, contact info) but require more space. For most inventory and shipping applications, Code 128 is the better choice due to its universal compatibility and efficiency."
    },
    {
        question: "What's the maximum length of data I can encode in Code 128?",
        answer: "While Code 128 technically supports up to 232 characters, practical limits depend on your printing resolution and label size. For best scanning reliability, we recommend keeping barcodes under 48 characters. The actual barcode width depends on the data and which subset is used - numeric data (Code 128C) produces the most compact barcodes, while mixed alphanumeric data requires more space. Our generator automatically optimizes the encoding to minimize barcode length."
    }
];

export const BarcodeGeneratorFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-16 max-w-4xl mx-auto">
            {/* SEO Content Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Code 128 Barcodes: The Complete Guide</h2>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p className="leading-relaxed text-lg">
                        <strong>Code 128</strong> revolutionized barcode technology when it was introduced in 1981. As a high-density
                        linear barcode symbology, it can encode the complete ASCII character set of 128 characters - including uppercase
                        and lowercase letters, numbers, symbols, and control characters. This versatility makes Code 128 the preferred
                        choice for shipping labels, product tracking, inventory management, and countless other applications where space
                        is limited but data capacity is critical.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why Code 128 Outperforms Other Barcode Formats</h3>
                    <p className="leading-relaxed">
                        Unlike older barcode formats such as Code 39, Code 128 produces significantly more compact barcodes while encoding
                        the same amount of information. When encoding numeric data, Code 128 is up to 40% more space-efficient than Code 39.
                        This efficiency is achieved through intelligent character set switching and optimized encoding algorithms, making it
                        the gold standard for modern logistics and supply chain operations.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Three Subsets of Code 128</h3>
                    <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="inline-block w-24 font-bold text-blue-600 shrink-0">Code 128A:</span>
                                <span>Optimized for uppercase letters and control characters. Perfect for shipping labels that need special formatting codes or machine-readable control sequences.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-24 font-bold text-blue-600 shrink-0">Code 128B:</span>
                                <span>Handles all upper and lowercase letters plus symbols. Ideal for general-purpose applications including product names, descriptions, and mixed text data.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-24 font-bold text-blue-600 shrink-0">Code 128C:</span>
                                <span>Exclusively numeric, encoding digit pairs for maximum compression. Best choice for serial numbers, tracking codes, and purely numeric identifiers - produces the shortest barcodes possible.</span>
                            </li>
                        </ul>
                    </div>
                    <p className="leading-relaxed">
                        Our barcode generator's "Auto" mode intelligently switches between these subsets within a single barcode,
                        automatically selecting the most efficient encoding for your specific data.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Enterprise-Grade Features Built In</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-2">Error Detection</h4>
                            <p className="text-sm">Modulo-103 checksum calculation ensures data integrity and prevents scanning errors, even with damaged or partially obscured barcodes.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-2">Bidirectional Scanning</h4>
                            <p className="text-sm">Can be scanned from left-to-right or right-to-left with identical results, improving scanning speed and reliability in high-volume environments.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-2">Variable Length</h4>
                            <p className="text-sm">No fixed size constraints - encode from 1 to 232 characters as needed. Perfect for both short product codes and detailed tracking information.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-2">Universal Compatibility</h4>
                            <p className="text-sm">Supported by all modern barcode scanners, mobile apps, and POS systems. Industry standard for logistics, healthcare, and retail.</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Real-World Business Impact</h3>
                    <p className="leading-relaxed">
                        Implementing Code 128 barcodes streamlines operations and reduces costs across your organization. Warehouse operations
                        see immediate improvements in pick accuracy and receiving speed. Employee training time drops to minutes instead of hours.
                        Data entry errors are virtually eliminated, and inventory audits that once took days can be completed in hours. The compact
                        size means you can fit more information on smaller labels, reducing printing costs while improving label durability.
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                                        openIndex === index ? 'transform rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-700 leading-relaxed animate-fade-in">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Industry Applications */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Where Code 128 Makes the Biggest Impact</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold text-blue-600 mb-3">🚚 Shipping & Logistics</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Major carriers like UPS, FedEx, and DHL rely on Code 128 for package tracking labels. The format's high
                            density allows shipping labels to contain tracking numbers, destination routing codes, and service level
                            information all in a compact, reliable barcode.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            Used by: Distribution centers, freight forwarders, 3PL providers, e-commerce fulfillment
                        </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="text-lg font-semibold text-green-600 mb-3">🏭 Manufacturing & Production</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            From automotive assembly lines to electronics manufacturing, Code 128 tracks components through every
                            production stage. Serial numbers, lot codes, and assembly dates are encoded for complete product
                            traceability and quality assurance.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            Used by: Auto manufacturers, electronics assembly, food processing, pharmaceutical production
                        </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                        <h3 className="text-lg font-semibold text-red-600 mb-3">🏥 Healthcare & Pharmaceuticals</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Patient safety depends on accurate identification. Code 128 appears on patient wristbands, medication
                            labels, blood samples, and medical equipment. The format's error detection prevents potentially
                            life-threatening mix-ups.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            Used by: Hospitals, pharmacies, clinical laboratories, medical device manufacturers
                        </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                        <h3 className="text-lg font-semibold text-purple-600 mb-3">📦 Warehouse & Inventory</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Modern warehouse management systems (WMS) use Code 128 for bin locations, pallet IDs, and product SKUs.
                            Handheld scanners and mobile devices read these barcodes to update inventory in real-time, eliminating
                            manual data entry errors.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            Used by: Amazon fulfillment centers, retail distribution, cold storage facilities, parts warehouses
                        </p>
                    </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3">💡 Why These Industries Choose Code 128</h3>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span><strong>Proven reliability</strong> in high-volume scanning environments</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span><strong>Space efficiency</strong> fits on small labels and tight spaces</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span><strong>Universal scanner support</strong> - works with any equipment</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span><strong>Cost-effective</strong> to print and implement at scale</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span><strong>Built-in error checking</strong> prevents costly mistakes</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span><strong>Regulatory compliance</strong> meets GS1 and industry standards</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
