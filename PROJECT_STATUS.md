# Project Status

## Recent Completions (2026-01-13)
- [x] **PDF to CSV Desktop Overhaul ("Best on Planet")**
    - [x] Keyboard Navigation & Excel-like feel
    - [x] Undo/Redo System
    - [x] Force AI OCR Toggle
    - [x] Sticky Headers / Freeze Panes
- [x] **PDF to UBL Semantic SEO**
    - [x] Long-tail keyword targeting
    - [x] Validation error & Regional mandate guides
- [x] **Regression Fix**
    - [x] Fixed global CSS/Tailwind build cache corruption
    - [x] Fixed PDF.js core/worker version mismatch (v4.10.38)
- [x] **PDF to CSV Improvements**
    - [x] Improved column extraction accuracy (spatial proximity tuning)
    - [x] Added "Preview vs Quick Convert" workflow

# Task: Add Portuguese Language Support (Scalable Architecture)

- [/] Planning
    - [x] Initial Audit <!-- id: 0 -->
    - [x] Architecture Planning (Config-driven, SEO-automated) <!-- id: 1 -->
    - [x] Create "Senior Architect" `implementation_plan.md` <!-- id: 2 -->

- [ ] Phase 1: The Foundation (Scalable Config)
    - [x] Update `lib/i18n-config.ts` (Central Locale Registry) <!-- id: 3 -->
    - [x] Refactor `utils/i18n.ts` (Typed Translation Dictionary) <!-- id: 4 -->
    - [x] Component: Create `LanguageSelector.tsx` (Dynamic) <!-- id: 5 -->
    - [x] Refactor `Header.tsx` to use `LanguageSelector` <!-- id: 6 -->

- [ ] Phase 2: SEO Automation
    - [x] Refactor `app/sitemap.ts` (Dynamic generation based on registry) <!-- id: 7 -->
    - [x] Create/Refactor `lib/metadata.ts` (Auto-generate hreflang/alternates) <!-- id: 8 -->

- [x] Phase 3: Scalable Tool Architecture
    - [x] Create/Update `ToolConfig` Type in `lib/toolConfig.ts` (Use `Record<Locale, string>`)
    - [x] Refactor `TOOL_CONFIGS` to use new structure
    - [x] Update `components/pages/ToolPageClient.tsx` to handle new config structure
    - [x] Update `app/[lang]/[tool]/page.tsx` (if applicable)

- [ ] Phase 4: Content Migration (Guides & Static)
    - [ ] Create `GuideLayout` or content helper <!-- id: 12 -->
    - [ ] Refactor Guide Pages to use `localized` content objects <!-- id: 13 -->

- [x] Verification
    - [x] Type Check (`npm run build` must fail then pass) <!-- id: 14 -->
    - [x] Confirm Sitemap generation for EN, FR, PT <!-- id: 15 -->
    - [x] Confirm Metadata (view source -> hreflang) <!-- id: 16 -->

- [ ] Priority Translations <!-- id: 17 -->
    - [x] Compress PDF Guide <!-- id: 18 -->
    - [x] Translate Merge PDF Guide <!-- id: 19 -->
    - [x] Translate Split PDF Guide <!-- id: 20 -->
    - [x] Translate PDF to Word Guide <!-- id: 21 -->
    - [x] Translate Sign PDF Guide <!-- id: 22 -->
    - [x] Translate Organize PDF Guide <!-- id: 23 -->
    - [x] Translate Rotate PDF Guide <!-- id: 24 -->
    - [x] Translate Delete PDF Pages Guide <!-- id: 25 -->
    - [x] Translate Crop PDF Guide <!-- id: 26 -->
    - [x] Translate Flatten PDF Guide <!-- id: 27 -->
    - [x] Translate Word to PDF Guide <!-- id: 28 -->
    - [x] Translate Insert Picture Guide <!-- id: 29 -->
    - [x] Translate Make Fillable Guide <!-- id: 30 -->

- [ ] Extended Translations (Batch 2) <!-- id: 31 -->
    - [x] Translate PDF to Excel Guide <!-- id: 32 -->
    - [x] Translate PDF to CSV Guide <!-- id: 33 -->
    - [x] Translate HEIC to PDF Guide <!-- id: 34 -->
    - [x] Translate EPUB to PDF Guide <!-- id: 35 -->
    - [x] Translate Email to PDF Guide <!-- id: 36 -->

- [ ] Uncommon Formats Translations (Batch 3) <!-- id: 37 -->
    - [x] Translate ACSM to PDF Guide <!-- id: 38 -->
    - [x] Translate ASPX to PDF Guide <!-- id: 39 -->
    - [x] Translate AVIF to PDF Guide <!-- id: 40 -->
    - [x] Translate CBR to PDF Guide <!-- id: 41 -->
    - [x] Translate GIF to PDF Guide <!-- id: 42 -->

- [ ] Batch 4: Developer & Technical Formats <!-- id: 43 -->
    - [x] Translate Ipynb to PDF Guide <!-- id: 44 -->
    - [x] Translate PHP to PDF Guide <!-- id: 45 -->
    - [x] Translate PDF to XML Guide <!-- id: 46 -->
    - [x] Translate PDF to UBL Guide <!-- id: 47 -->
    - [x] Translate RTF to PDF Guide <!-- id: 48 -->
    - [ ] Translate XRechnung Viewer Guide <!-- id: 49 -->

- [ ] Batch 5: Advanced Editing & Compression Variants <!-- id: 50 -->
    - [ ] Translate Compress PDF No Quality Loss Guide
    - [ ] Translate Compress PDF Online Guide
    - [ ] Translate Merge Large PDFs Guide
    - [ ] Translate Merge PDF Online Guide
    - [ ] Translate Split PDF Online Guide
    - [ ] Translate Trim PDF Guide
    - [ ] Translate PDF Page Remover Guide

- [ ] Batch 6: Industry Specific Guides <!-- id: 51 -->
    - [ ] Translate Finance PDF Guide
    - [ ] Translate Financial Statement PDF Guide
    - [ ] Translate Healthcare PDF Guide
    - [ ] Translate Legal PDF Guide
    - [ ] Translate Invoice OCR Guide
    - [ ] Translate Analyze PDF Guide

- [ ] Batch 7: Platform Specific & Security <!-- id: 52 -->
    - [ ] Translate Change PDF Viewer Mac Guide
    - [ ] Translate Edit XFA PDF Guide
    - [ ] Translate Barcode Generator Guide
    - [ ] Translate Phishing PDF Guide
    - [ ] Translate Private PDF Tools Guide
    - [ ] Translate PDF to Kindle Guide
    - [ ] Translate PDF to EPUB Guide

- [ ] Batch 8: Hubs & Specific Variants <!-- id: 53 -->
    - [ ] Translate PDF Conversions Hub
    - [ ] Translate PDF Editing Hub
    - [ ] Translate PDF OCR Analysis Hub
    - [ ] Translate PDF Security Hub
    - [ ] Translate Ultimate PDF Guide
    - [ ] Translate PDF to Word Variants (Formatting, Offline, Online, Scanned)
