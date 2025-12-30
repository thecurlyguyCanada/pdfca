import { UltimatePdfGuide } from '@/components/pages/guides/UltimatePdfGuide';
import { DeletePdfPagesGuide } from '@/components/pages/guides/DeletePdfPagesGuide';
import { RotatePdfGuide } from '@/components/pages/guides/RotatePdfGuide';
import { HeicToPdfGuide } from '@/components/pages/guides/HeicToPdfGuide';
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
import { PdfToUblGuide } from '@/components/pages/guides/PdfToUblGuide';
import { IpynbToPdfGuide } from '@/components/pages/guides/IpynbToPdfGuide';
import { AvifToPdfGuide } from '@/components/pages/guides/AvifToPdfGuide';

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
    'pdf-to-excel': PdfToCsvGuide, // Reuse the same rich guide as it covers both
    'ocr-pdf': InvoiceOcrGuide, // Alias for legacy/general OCR links
    'analyze-pdf': PhishingPdfGuide,
    'pdf-to-kindle': PdfToEpubGuide,
    'pdf-to-ubl': PdfToUblGuide,
    'ipynb-to-pdf': IpynbToPdfGuide,
    'avif-to-pdf': AvifToPdfGuide,
    'pdf-to-avif': AvifToPdfGuide,
};

export const getAllGuideSlugs = () => Object.keys(GUIDE_MAP);
