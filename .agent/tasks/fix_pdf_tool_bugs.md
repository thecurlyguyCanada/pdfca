# Task: Comprehensive Bug Fix for PDF Tools

The goal is to resolve critical bugs in the PDF tools (Crop and Sign), primarily focusing on the broken PDF.js integration which prevents document rendering, and ensuring smooth UI/UX.

## Core Issues
1.  **Broken PDF Rendering**: Both Crop and Sign tools fail with `TypeError: pdfjs.getDocument is not a function`. This is due to incorrect dynamic imports of `pdfjs-dist` in `utils/pdfUtils.ts`.
2.  **PDF.js Worker Issues**: The worker resolution might be problematic in the current environment.
3.  **UI Alignment**: In `CropPdfTool.tsx`, the overlay crop box needs to align perfectly with the rendered PDF page.

## Success Criteria
- [ ] Users can upload a PDF to the Crop tool and see the page rendered.
- [ ] Users can upload a PDF to the Sign tool and see the page rendered.
- [ ] Visual crop handles move and resize correctly over the PDF content.
- [ ] No PDF-related console errors on tool initialization.
- [ ] The "Sign PDF" tool functions correctly in both Desktop and Mobile views.

## Related Tasks
- [Implementation Plan: Fix PDF.js Integration and Tool UI](implementation_plan_fix_pdf_bugs)
