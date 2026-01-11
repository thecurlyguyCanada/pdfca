# Implementation Plan - Bug Audit & Fixes

## Problem
The codebase contains several "soft" bugs and technical debt items that could lead to maintenance issues or localization failures:
1.  **Hardcoded Strings:** Several guide components (`XRechnungViewerGuide`, etc.) use inline conditional logic for translations instead of the localized content object or `i18n.ts`.
2.  **Unused Code:** `getGuideContent` is imported and called but not used in some guides.
3.  **Inconsistent Metadata:** Metadata generation relies on inline strings rather than centralized config.

## Proposed Changes

### 1. Refactor Guide Components
**Target Files:**
- `components/pages/guides/XRechnungViewerGuide.tsx`
- `components/pages/guides/AnalyzePdfGuide.tsx`
- `components/pages/guides/PdfToUblGuide.tsx`
- `components/pages/guides/PdfPageRemoverGuide.tsx`

**Action:**
- Move title, description, and breadcrumb strings into the `getLocalContent` object within the file.
- Remove unused `getGuideContent` calls.
- Ensure all text is sourced from the `t` object.

### 2. Verify `i18n.ts` Completeness
**Target File:** `utils/i18n.ts`
**Action:**
- Ensure all relevant tool keys exist in `fr` and `pt` sections (manual verification during refactor).
- If keys are missing (e.g. `xrechnungViewerGuide` in main `i18n.ts`), add them OR stick to local content if it's guide-specific. *Decision: Keep guide-specific content in the guide file for now to avoid bloating `i18n.ts` further.*

### 3. Verification
- specific tests:
    - Build validation.
    - Visual check of refactored pages (via code review since I cannot see browser).

## Verification Plan
- Run `npm run build` after changes.
- Check for TypeScript errors.
