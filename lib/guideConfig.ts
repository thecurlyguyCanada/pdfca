import { UltimatePdfGuide } from '@/components/pages/guides/UltimatePdfGuide';
import { DeletePdfPagesGuide } from '@/components/pages/guides/DeletePdfPagesGuide';
import { RotatePdfGuide } from '@/components/pages/guides/RotatePdfGuide';
import { HeicToPdfGuide } from '@/components/pages/guides/HeicToPdfGuide';
import { PdfToUblGuide } from '@/components/pages/guides/PdfToUblGuide';
import { EpubToPdfGuide } from '@/components/pages/guides/EpubToPdfGuide';
import { PdfToEpubGuide } from '@/components/pages/guides/PdfToEpubGuide';
import { OrganizePdfGuide } from '@/components/pages/guides/OrganizePdfGuide';
import { MakeFillableGuide } from '@/components/pages/guides/MakeFillableGuide';
import { EmailToPdfGuide } from '@/components/pages/guides/EmailToPdfGuide';
import { CbrToPdfGuide } from '@/components/pages/guides/CbrToPdfGuide';
import { PdfToWordGuide } from '@/components/pages/guides/PdfToWordGuide';
import { WordToPdfGuide } from '@/components/pages/guides/WordToPdfGuide';
import { RtfToPdfGuide } from '@/components/pages/guides/RtfToPdfGuide';
import { PdfPageRemoverGuide } from '@/components/pages/guides/PdfPageRemoverGuide';
import { CropPdfGuide } from '@/components/pages/guides/CropPdfGuide';
import { CompressPdfGuide } from '@/components/pages/guides/CompressPdfGuide';
import { MergePdfGuide } from '@/components/pages/guides/MergePdfGuide';
import { EditXfaPdfGuide } from '@/components/pages/guides/EditXfaPdfGuide';
import { InsertPictureGuide } from '@/components/pages/guides/InsertPictureGuide';
import { FlattenPdfGuide } from '@/components/pages/guides/FlattenPdfGuide';
import { SplitPdfGuide } from '@/components/pages/guides/SplitPdfGuide';
import { InvoiceOcrGuide } from '@/components/pages/guides/InvoiceOcrGuide';
import { PrivatePdfToolsGuide } from '@/components/pages/guides/PrivatePdfToolsGuide';
import { LegalPdfGuide } from '@/components/pages/guides/LegalPdfGuide';
import { HealthcarePdfGuide } from '@/components/pages/guides/HealthcarePdfGuide';
import { FinancePdfGuide } from '@/components/pages/guides/FinancePdfGuide';
import { PdfToCsvGuide } from '@/components/pages/guides/PdfToCsvGuide';
import { PhishingPdfGuide } from '@/components/pages/guides/PhishingPdfGuide';
import { TrimPdfGuide } from '@/components/pages/guides/TrimPdfGuide';
import { GifToPdfGuide } from '@/components/pages/guides/GifToPdfGuide';
import { AspxToPdfGuide } from '@/components/pages/guides/AspxToPdfGuide';
import { AcsmToPdfGuide } from '@/components/pages/guides/AcsmToPdfGuide';
import { PhpToPdfGuide } from '@/components/pages/guides/PhpToPdfGuide';
import { PdfToWordOnlineGuide } from '@/components/pages/guides/PdfToWordOnlineGuide';
import { CompressPdfOnlineGuide } from '@/components/pages/guides/CompressPdfOnlineGuide';
import { MergePdfOnlineGuide } from '@/components/pages/guides/MergePdfOnlineGuide';
import { PdfConversionsHub } from '@/components/pages/guides/PdfConversionsHub';
import { PdfEditingHub } from '@/components/pages/guides/PdfEditingHub';
import { PdfSecurityHub } from '@/components/pages/guides/PdfSecurityHub';
import { PdfOcrAnalysisHub } from '@/components/pages/guides/PdfOcrAnalysisHub';
import { PdfToWordOfflineGuide } from '@/components/pages/guides/PdfToWordOfflineGuide';
import { PdfToWordFormattingGuide } from '@/components/pages/guides/PdfToWordFormattingGuide';
import { PdfToWordScannedGuide } from '@/components/pages/guides/PdfToWordScannedGuide';
import { PdfToExcelGuide } from '@/components/pages/guides/PdfToExcelGuide';
// import { PdfToCsvGuide } from '@/components/pages/guides/PdfToCsvGuide';
import { PdfToXmlGuide } from '@/components/pages/guides/PdfToXmlGuide';
import { PdfToKindleGuide } from '@/components/pages/guides/PdfToKindleGuide';
import { SplitPdfOnlineGuide } from '@/components/pages/guides/SplitPdfOnlineGuide';
import { MergeLargePdfsGuide } from '@/components/pages/guides/MergeLargePdfsGuide';
import { CompressPdfNoQualityLossGuide } from '@/components/pages/guides/CompressPdfNoQualityLossGuide';
import { SignPdfGuide } from '@/components/pages/guides/SignPdfGuide';
import { AnalyzePdfGuide } from '@/components/pages/guides/AnalyzePdfGuide';
import { BarcodeGeneratorGuide } from '@/components/pages/guides/BarcodeGeneratorGuide';
import { XRechnungViewerGuide } from '@/components/pages/guides/XRechnungViewerGuide';
import { FinancialStatementPdfGuide } from '@/components/pages/guides/FinancialStatementPdfGuide';

export const GUIDE_MAP: Record<string, React.ComponentType<any>> = {
    'ultimate-pdf-guide': UltimatePdfGuide,
    'private-pdf-tools': PrivatePdfToolsGuide,
    'legal-pdf-tools': LegalPdfGuide,
    'healthcare-pdf-security': HealthcarePdfGuide,
    'finance-pdf-security': FinancePdfGuide,
    'split-pdf': SplitPdfGuide,
    'delete-pdf-pages': DeletePdfPagesGuide,
    'rotate-pdf': RotatePdfGuide,
    'heic-to-pdf': HeicToPdfGuide,
    'epub-to-pdf': EpubToPdfGuide,
    'pdf-to-epub': PdfToEpubGuide,
    'organize-pdf': OrganizePdfGuide,
    'make-pdf-fillable': MakeFillableGuide,
    'email-to-pdf': EmailToPdfGuide,
    'cbr-to-pdf': CbrToPdfGuide,
    'pdf-to-word': PdfToWordGuide,
    'word-to-pdf': WordToPdfGuide,
    'rtf-to-pdf': RtfToPdfGuide,
    'pdf-page-remover': PdfPageRemoverGuide,
    'crop-pdf': CropPdfGuide,
    'compress-pdf': CompressPdfGuide,
    'merge-pdf': MergePdfGuide,
    'edit-xfa-pdf': EditXfaPdfGuide,
    'insert-picture-in-pdf': InsertPictureGuide,
    'flatten-pdf': FlattenPdfGuide,
    'invoice-ocr': InvoiceOcrGuide,
    'pdf-to-csv': PdfToCsvGuide,
    // 'pdf-to-excel' moved to Long-Tail below
    'ocr-pdf': InvoiceOcrGuide, // Alias for legacy/general OCR links
    // 'analyze-pdf' moved to Long-Tail below
    // 'pdf-to-kindle' moved to Long-Tail below
    'trim-pdf': TrimPdfGuide,
    'pdf-to-ubl': PdfToUblGuide,
    'gif-to-pdf': GifToPdfGuide,
    'aspx-to-pdf': AspxToPdfGuide,
    'acsm-to-pdf': AcsmToPdfGuide,
    'php-to-pdf': PhpToPdfGuide,
    'pdf-to-word-online': PdfToWordOnlineGuide,
    'compress-pdf-online': CompressPdfOnlineGuide,
    'merge-pdf-online': MergePdfOnlineGuide,
    'pdf-conversions': PdfConversionsHub,
    'pdf-editing': PdfEditingHub,
    'pdf-security': PdfSecurityHub,
    'pdf-ocr-analysis': PdfOcrAnalysisHub,
    // Long-Tail
    'pdf-to-word-offline': PdfToWordOfflineGuide,
    'pdf-to-word-formatting': PdfToWordFormattingGuide,
    'pdf-to-word-scanned': PdfToWordScannedGuide,
    'pdf-to-excel': PdfToExcelGuide,
    // 'pdf-to-csv': PdfToCsvGuide, // ALREADY REGISTERED ABOVE
    'pdf-to-xml': PdfToXmlGuide,
    'pdf-to-kindle': PdfToKindleGuide,
    'split-pdf-online': SplitPdfOnlineGuide,
    'merge-large-pdfs': MergeLargePdfsGuide,
    'compress-pdf-no-quality-loss': CompressPdfNoQualityLossGuide,
    'sign-pdf': SignPdfGuide,
    'analyze-pdf': AnalyzePdfGuide,
    'barcode-generator': BarcodeGeneratorGuide,
    'xrechnung-viewer': XRechnungViewerGuide,
    'financial-statement-pdf': FinancialStatementPdfGuide,
};

export const getAllGuideSlugs = () => Object.keys(GUIDE_MAP);
