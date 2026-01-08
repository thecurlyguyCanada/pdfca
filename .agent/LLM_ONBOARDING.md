# 🤖 LLM Onboarding Guide for pdfcanada.ca

> ⚠️ **READ THIS ENTIRE DOCUMENT BEFORE MAKING ANY CHANGES**
> This codebase has many interconnected parts. Breaking one file often breaks 10 others.

---

## 🎯 QUICK REFERENCE: What NOT to Break

### NEVER modify these without understanding ALL dependencies:
| File | Why It's Critical |
|------|-------------------|
| `utils/types.ts` | ToolType enum used in 20+ files |
| `lib/toolConfig.ts` | Every tool page depends on this |
| `utils/i18n.ts` | 229KB of translations - missing keys cause hydration errors |
| `config/pdf.ts` | PDF.js worker version - wrong version = complete PDF failure |
| `components/ToolInterface.tsx` | Central hub for ALL tools |

---

## 📁 FILE DEPENDENCY MAP

### The Flow: URL → Page → Component → Utility

```
USER VISITS: /en/merge-pdf
                ↓
┌─────────────────────────────────────────────────────────────┐
│ 1. ROUTING LAYER                                            │
│    middleware.ts → checks locale, redirects if needed       │
│            ↓                                                │
│    app/[lang]/(tools)/[tool]/page.tsx                       │
│    - Calls: getToolConfig(slug) from lib/toolConfig.ts      │
│    - Uses: translations from utils/i18n.ts                  │
│    - Renders: ToolPageClient component                      │
└─────────────────────────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. PAGE ORCHESTRATOR                                        │
│    components/pages/ToolPageClient.tsx                      │
│    - Receives: toolConfig prop                              │
│    - Manages: file state, processing state, error state     │
│    - Imports: pdfUtils.ts functions for processing          │
│    - Renders: ToolInterface component                       │
│                                                             │
│    CRITICAL PROP PASSING:                                   │
│    <ToolInterface                                           │
│        currentTool={toolConfig.tool}  ← ToolType enum       │
│        tools={[toolConfig]}           ← Array of config     │
│        lang={lang}                    ← 'en' or 'fr'        │
│        t={translations[lang]}         ← Translation object  │
│    />                                                       │
└─────────────────────────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. TOOL INTERFACE (THE HUB)                                 │
│    components/ToolInterface.tsx (914 lines)                 │
│                                                             │
│    WHAT IT DOES:                                            │
│    - Shows file dropzone when no file selected              │
│    - Loads specialized tool components dynamically          │
│    - Handles drag-and-drop                                  │
│    - Shows page thumbnails for PDF tools                    │
│                                                             │
│    HOW IT FINDS TOOL CONFIG:                                │
│    const tool = tools.find(t => t.tool === currentTool);    │
│    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ │
│    ⚠️ Uses 't.tool' NOT 't.id' - this was a bug we fixed   │
│                                                             │
│    SPECIALIZED TOOLS (dynamically imported):                │
│    - SignPdfTool      → ToolType.SIGN                       │
│    - CropPdfTool      → ToolType.CROP                       │
│    - InvoiceOcrTool   → ToolType.INVOICE_OCR                │
│    - BarcodeGeneratorTool → ToolType.BARCODE_GENERATOR      │
│    - PdfToCsvTool     → ToolType.PDF_TO_CSV                 │
│    - PhishingDetectorTool → ToolType.PHISHING_DETECTOR      │
│    - XRechnungViewer  → ToolType.XRECHNUNG_VIEWER           │
│    - PdfToUblTool     → ToolType.PDF_TO_UBL                 │
└─────────────────────────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. PDF PROCESSING                                           │
│    utils/pdfUtils.ts (3298 lines, 76 exported functions)    │
│                                                             │
│    LAZY LOADED LIBRARIES:                                   │
│    - getPdfJs()    → pdfjs-dist (rendering/parsing)         │
│    - getPdfLib()   → pdf-lib (manipulation)                 │
│    - getJsPdf()    → jspdf (generation)                     │
│    - getJSZip()    → jszip (compression)                    │
│    - getMammoth()  → mammoth (Word parsing)                 │
│    - getDocx()     → docx (Word generation)                 │
│                                                             │
│    KEY FUNCTIONS:                                           │
│    - deletePagesFromPdf()                                   │
│    - rotatePdfPages()                                       │
│    - reorderPdfPages()                                      │
│    - mergePdfs()                                            │
│    - splitPdf()                                             │
│    - compressPdf()                                          │
│    - signPdf()                                              │
│    - convertHeicToPdf()                                     │
│    - convertPdfToWord()                                     │
│    - convertWordToPdf()                                     │
│    - extractInvoiceData()                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔗 CRITICAL CONNECTIONS

### 1. ToolType Enum → ToolConfig → Tool Detection

```typescript
// FILE: utils/types.ts
export enum ToolType {
    MERGE = 'MERGE',      // ← This string value matters
    SPLIT = 'SPLIT',
    PDF_TO_UBL = 'PDF_TO_UBL',
    // ... 47 total tools
}

// FILE: lib/toolConfig.ts
{
    slug: 'merge-pdf',        // ← URL path
    tool: ToolType.MERGE,     // ← Links to enum
    i18nKey: 'merge',         // ← Links to translations
    accept: '.pdf',           // ← File types accepted
    // ...
}

// FILE: components/ToolInterface.tsx
const isMergeTool = currentTool === ToolType.MERGE;  // ← Detection
const tool = tools.find(t => t.tool === currentTool); // ← Config lookup
```

### 2. Translation Keys Chain

```typescript
// FILE: lib/toolConfig.ts
{
    slug: 'invoice-ocr',
    i18nKey: 'invoiceOcr',  // ← This key MUST exist in i18n.ts
}

// FILE: utils/i18n.ts
export const translations = {
    en: {
        // Tool-specific translations
        features: {
            invoiceOcr: {  // ← MUST MATCH i18nKey
                title: "Invoice OCR",
                description: "...",
                faq: [{ question: "...", answer: "..." }]
            }
        }
    },
    fr: {
        features: {
            invoiceOcr: { ... }  // ← MUST ALSO EXIST IN FRENCH
        }
    }
}
```

**⚠️ If translation key is missing:**
- Tool title shows as undefined
- FAQs don't appear
- Hydration errors in console
- SEO metadata breaks

### 3. PDF.js Worker Version Chain

```typescript
// FILE: package.json
"pdfjs-dist": "^4.10.38"  // ← Installed version

// FILE: config/pdf.ts
WORKER: {
    PATH: 'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs'
    //                                  ^^^^^^^ MUST MATCH
}

// FILE: utils/pdfUtils.ts
pdfjs.GlobalWorkerOptions.workerSrc = PDF_CONFIG.WORKER.PATH;

// FILE: utils/securityAnalyzer.ts
pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_CONFIG.WORKER.PATH;

// FILE: utils/pdfProcessing.worker.ts
pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.10.38/...';
```

**⚠️ If versions don't match:**
- Error: "API version X does not match Worker version Y"
- ALL PDF tools completely broken
- No PDF can be loaded or processed

---

## 📋 COMPLETE FILE LIST WITH PURPOSES

### /app (Next.js App Router)
| File | Purpose | Imports From |
|------|---------|--------------|
| `[lang]/layout.tsx` | Root layout, fonts, metadata | i18n-config, ErrorBoundary |
| `[lang]/page.tsx` | Homepage | HomePageServer |
| `[lang]/(tools)/[tool]/page.tsx` | Dynamic tool pages | toolConfig, ToolPageClient |
| `[lang]/guides/[guide]/page.tsx` | Dynamic guide pages | guideConfig, guideMetadata |
| `middleware.ts` | i18n redirects | i18n-config |
| `sitemap.ts` | Dynamic sitemap | toolConfig, guideConfig |
| `robots.ts` | robots.txt | None |

### /components
| File | Lines | Purpose | Used By |
|------|-------|---------|---------|
| `ToolInterface.tsx` | 914 | Central tool UI | ToolPageClient |
| `SignPdfTool.tsx` | ~1200 | E-signature | ToolInterface |
| `CropPdfTool.tsx` | ~600 | PDF cropping | ToolInterface |
| `Header.tsx` | ~300 | Site header | All pages |
| `Footer.tsx` | ~400 | Site footer | All pages |
| `SEO.tsx` | ~350 | Structured data | All pages |

### /components/tools (Specialized Tools)
| File | Purpose | ToolType |
|------|---------|----------|
| `BarcodeGeneratorTool.tsx` | Barcode generation | BARCODE_GENERATOR |
| `InvoiceOcrTool.tsx` | Invoice data extraction | INVOICE_OCR |
| `PdfToCsvTool.tsx` | Table extraction | PDF_TO_CSV |
| `PdfToUblTool.tsx` | UBL XML generation | PDF_TO_UBL |
| `PhishingDetectorTool.tsx` | PDF security analysis | PHISHING_DETECTOR |
| `XRechnungViewer.tsx` | German e-invoice viewer | XRECHNUNG_VIEWER |

### /lib (Configuration)
| File | Purpose | Size |
|------|---------|------|
| `toolConfig.ts` | All 47 tool definitions | 42KB |
| `guideConfig.ts` | Guide component mapping | 7KB |
| `guideMetadata.ts` | Guide SEO data | 19KB |
| `i18n-config.ts` | Locale list (en, fr) | <1KB |
| `structuredData.ts` | JSON-LD schemas | 8KB |

### /utils (Business Logic)
| File | Purpose | Size | Key Exports |
|------|---------|------|-------------|
| `i18n.ts` | All translations | 229KB | `translations`, `Language` |
| `pdfUtils.ts` | PDF operations | 120KB | 76 functions |
| `types.ts` | TypeScript types | 3KB | `ToolType`, `AppState`, `InvoiceData` |
| `invoiceParsers.ts` | OCR parsing | 11KB | `parseInvoiceText` |
| `ublGenerator.ts` | UBL XML | 7KB | `generateUBL` |
| `csvExtractor.ts` | CSV extraction | 7KB | `extractTableFromPdf` |
| `securityAnalyzer.ts` | PDF security | 8KB | `analyzePdfSecurity` |

### /config (Constants)
| File | Purpose |
|------|---------|
| `pdf.ts` | PDF.js worker path, page dimensions, metadata |
| `compression.ts` | Compression levels (good/balanced/extreme) |
| `routes.ts` | Route constants |
| `urls.ts` | URL constants |
| `fileTypes.ts` | Accepted MIME types |
| `ui.ts` | UI constants |

---

## ⚡ STEP-BY-STEP: Adding a New Tool

### Example: Adding "PDF to HTML" Tool

**Step 1: Add to ToolType enum**
```typescript
// utils/types.ts
export enum ToolType {
    // ... existing
    PDF_TO_HTML = 'PDF_TO_HTML'  // ← Add at end
}
```

**Step 2: Add ToolConfig**
```typescript
// lib/toolConfig.ts - Add to TOOL_CONFIGS array
{
    slug: 'pdf-to-html',
    tool: ToolType.PDF_TO_HTML,
    title: 'PDF to HTML',
    titleFr: 'PDF vers HTML',
    description: 'Convert PDF to HTML...',
    descriptionFr: 'Convertir PDF en HTML...',
    keywords: ['pdf to html', 'convert pdf'],
    keywordsFr: ['pdf vers html', 'convertir pdf'],
    accept: '.pdf,application/pdf',
    i18nKey: 'pdfToHtml'
}
```

**Step 3: Add translations**
```typescript
// utils/i18n.ts
en: {
    features: {
        pdfToHtml: {
            title: "PDF to HTML Converter",
            description: "...",
            faq: [
                { question: "How does it work?", answer: "..." }
            ]
        }
    }
},
fr: {
    features: {
        pdfToHtml: {
            title: "Convertisseur PDF vers HTML",
            description: "...",
            faq: [...]
        }
    }
}
```

**Step 4: Add processing function**
```typescript
// utils/pdfUtils.ts
export async function convertPdfToHtml(file: File): Promise<string> {
    const pdfjs = await getPdfJs();
    // ... implementation
}
```

**Step 5: Add to ToolPageClient (if not auto-handled)**
```typescript
// components/pages/ToolPageClient.tsx
import { convertPdfToHtml } from '@/utils/pdfUtils';

// In onAction function:
case ToolType.PDF_TO_HTML:
    const html = await convertPdfToHtml(file);
    // Handle download
    break;
```

**Step 6: (Optional) Create specialized component**
```typescript
// components/tools/PdfToHtmlTool.tsx
export function PdfToHtmlTool({ file, onComplete, lang }) {
    // Custom UI
}
```

```typescript
// components/ToolInterface.tsx
const PdfToHtmlTool = dynamic(() => import('./tools/PdfToHtmlTool'), {
    ssr: false,
    loading: () => <RefreshCcw className="animate-spin" />
});

const isPdfToHtmlTool = currentTool === ToolType.PDF_TO_HTML;
```

---

## 🐛 BUGS WE'VE FIXED (Don't Reintroduce!)

### Bug 1: Tool Lookup Using Wrong Property
```typescript
// ❌ WRONG (caused undefined tool display)
const tool = tools.find(t => t.id === currentTool);

// ✅ CORRECT
const tool = tools.find(t => t.tool === currentTool);
```
**Location:** `ToolInterface.tsx` line ~273

### Bug 2: PDF.js Worker Version Mismatch
All worker paths MUST use the same version as package.json.
- Check: `config/pdf.ts`
- Check: `utils/pdfUtils.ts`
- Check: `utils/securityAnalyzer.ts`
- Check: `utils/pdfProcessing.worker.ts`

### Bug 3: Missing Translation Keys
Every tool with `i18nKey` must have matching:
- `translations.en.features[i18nKey]`
- `translations.fr.features[i18nKey]`

---

## ✅ PRE-COMMIT CHECKLIST

Before committing ANY changes:

- [ ] `npm run build` completes without errors
- [ ] Test tool in English: `/en/[tool-slug]`
- [ ] Test tool in French: `/fr/[tool-slug]`
- [ ] Check browser console for errors
- [ ] Upload a test file and verify processing works
- [ ] Download works correctly
- [ ] If you modified i18n.ts, both languages have translations
- [ ] If you modified types.ts, all dependent files updated

---

## 🔍 DEBUGGING TIPS

### "Tool shows empty ()" in dropzone
→ Tool lookup failed. Check `tools.find(t => t.tool === currentTool)` logic.

### "API version does not match Worker version"
→ PDF.js version mismatch. Check all worker path references.

### Hydration mismatch errors
→ Usually missing translations. Check i18n.ts for the tool's i18nKey.

### Tool page 404s
→ Tool slug not in TOOL_CONFIGS array in lib/toolConfig.ts.

### TypeScript errors about ToolType
→ Check if ToolType enum in types.ts matches usage.

---

*Document Version: 2.0 | Last Updated: January 2026*
