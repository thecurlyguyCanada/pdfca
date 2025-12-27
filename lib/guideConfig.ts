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
import { PdfPageRemoverGuide } from '@/components/pages/guides/PdfPageRemoverGuide';
import { CropPdfGuide } from '@/components/pages/guides/CropPdfGuide';
import { CompressPdfGuide } from '@/components/pages/guides/CompressPdfGuide';
import { MergePdfGuide } from '@/components/pages/guides/MergePdfGuide';
import { EditXfaPdfGuide } from '@/components/pages/guides/EditXfaPdfGuide';
import { InsertPictureGuide } from '@/components/pages/guides/InsertPictureGuide';
import { FlattenPdfGuide } from '@/components/pages/guides/FlattenPdfGuide';

export const GUIDE_MAP: Record<string, React.ComponentType<any>> = {
    'ultimate-pdf-guide': UltimatePdfGuide,
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
    'pdf-page-remover': PdfPageRemoverGuide,
    'crop-pdf': CropPdfGuide,
    'compress-pdf': CompressPdfGuide,
    'merge-pdf': MergePdfGuide,
    'edit-xfa-pdf': EditXfaPdfGuide,
    'insert-picture-in-pdf': InsertPictureGuide,
    'flatten-pdf': FlattenPdfGuide,
};

export const getAllGuideSlugs = () => Object.keys(GUIDE_MAP);
