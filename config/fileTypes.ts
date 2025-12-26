/**
 * File Types Configuration
 * File extensions and MIME types accepted by various tools
 */

export const FILE_TYPES = {
  // Document formats
  PDF: {
    extensions: ['.pdf'],
    mimeTypes: ['application/pdf'],
    accept: '.pdf',
  },

  DOCX: {
    extensions: ['.docx'],
    mimeTypes: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    accept: '.docx',
  },

  // Spreadsheet formats
  EXCEL: {
    extensions: ['.xlsx', '.xls'],
    mimeTypes: [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
    ],
    accept: '.xlsx,.xls',
  },

  // E-book formats
  EPUB: {
    extensions: ['.epub'],
    mimeTypes: ['application/epub+zip'],
    accept: '.epub',
  },

  // Comic book formats
  CBR: {
    extensions: ['.cbr', '.cbz'],
    mimeTypes: ['application/x-cbr', 'application/x-cbz'],
    accept: '.cbr,.cbz',
  },

  // Image formats
  HEIC: {
    extensions: ['.heic', '.heif'],
    mimeTypes: ['image/heic', 'image/heif'],
    accept: '.heic',
  },

  IMAGE: {
    extensions: ['.jpg', '.jpeg', '.png', '.webp'],
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    accept: 'image/jpeg,image/png,image/webp',
  },

  // Archive formats
  ARCHIVE: {
    extensions: ['.zip', '.rar'],
    mimeTypes: ['application/zip', 'application/x-rar-compressed'],
    accept: '.zip,.rar',
  },

  // Data formats
  XML: {
    extensions: ['.xml'],
    mimeTypes: ['application/xml', 'text/xml'],
    accept: '.xml',
  },
} as const;

/**
 * Get accept attribute for file input based on file type
 */
export const getAcceptAttribute = (fileType: keyof typeof FILE_TYPES): string => {
  return FILE_TYPES[fileType].accept;
};

/**
 * Check if file extension matches expected type
 */
export const isValidFileType = (fileName: string, fileType: keyof typeof FILE_TYPES): boolean => {
  const extension = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
  const extensions = FILE_TYPES[fileType].extensions as readonly string[];
  return extensions.indexOf(extension) !== -1;
};
