# Implementation Plan: Fix PDF.js Integration and Tool UI

This plan outlines the steps to resolve the PDF.js import issues and refine the UI for the Crop and Sign tools.

## Proposed Changes

### 1. `utils/pdfUtils.ts`
- Investigate the correct ESM-compatible import for `pdfjs-dist` version 3.x.
- Update `getPdfJs` and `initPdfWorker` to use valid entry points.
- Ensure `GlobalWorkerOptions.workerSrc` points to a reachable file (e.g., from `public/` or a CDN as a fallback, but local is preferred).

### 2. `components/CropPdfTool.tsx`
- Ensure the canvas used for rendering has its CSS dimensions explicitly set to match the `scaledViewport`.
- Verify that `Rnd` crop box coordinates (percentages) are correctly calculated relative to the rendered canvas.
- Fix any potential state synchronization issues during resize.

### 3. `components/SignPdfTool.tsx`
- Verify the layout for both Desktop and Mobile.
- Ensure that switching between "Pan" and "Select" tools works correctly.

## Verification Plan

### Automated Tests
- Since there are no existing Jest/Vitest tests, verification will be primarily manual visual testing using the browser.

### Manual Verification
1. **PDF Rendering Test**:
   - Open `/crop-pdf`.
   - Upload any PDF file.
   - Verify the page displays in the center.
   - Check console for `TypeError` or worker loading errors.
2. **Crop Tool Precision**:
   - Resize the crop box to specific markers on the PDF.
   - Click "Crop" and verify the output (if possible to download and view).
3. **Sign Tool Verification**:
   - Open `/sign-pdf`.
   - Verify page rendering.
   - Add a signature and move it around.
   - Verify it stays in place relative to the page.

## Detailed Steps
1. **Internal Research**: Use `run_command` to inspect `node_modules/pdfjs-dist/package.json` to see `exports`.
2. **Fix Imports**: Update `pdfUtils.ts` with the correct import pattern.
3. **Setup Worker**: Ensure the worker is correctly loaded.
4. **Refine UI**: Update `CropPdfTool.tsx` and `SignPdfTool.tsx` as needed.
5. **Final Browser Test**: Use subagent to confirm the rendering.
