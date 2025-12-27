# Production Bug Report: pdfcanada.ca
**Date:** 2025-12-27
**Audit Type:** SEO, Performance, Vercel Deployment, Production Readiness
**Branch:** claude/optimize-nextjs-vercel-AzHdR

---

## CRITICAL BUGS (Fix Immediately)

### 🔴 BUG #1: JSON-LD Schema Scripts Using Wrong Strategy
**Severity:** CRITICAL (SEO Impact)
**Location:** `app/[lang]/page.tsx:109-132`

**Issue:**
All structured data scripts use `strategy="afterInteractive"` which delays schema parsing until after page hydration. Search engine crawlers (Google, Bing) need immediate access to JSON-LD schemas for proper indexing.

```tsx
// ❌ WRONG - Delays schema until after hydration
<Script
  id="schema-website"
  type="application/ld+json"
  strategy="afterInteractive"  // <-- BAD FOR SEO
  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
/>
```

**Impact:**
- Google may not index structured data
- Rich snippets may not appear in search results
- Local business schema delayed
- Breadcrumb schema not immediately available

**Fix:**
Remove `strategy` prop (defaults to defer, loads before interactive) or remove Script wrapper entirely since JSON-LD doesn't execute JavaScript.

---

## HIGH PRIORITY BUGS

### 🟠 BUG #2: Production Console Statements (84 instances across 30 files)
**Severity:** HIGH (Performance + Security)
**Locations:**
- `utils/pdfUtils.ts` (9 instances: lines 62, 73, 84, 274, 396, 409, 450, 724, 841)
- `components/pages/ToolPageClient.tsx` (4 instances: lines 70, 81, 84, 88)
- `components/ToolInterface.tsx`
- `components/CropPdfTool.tsx`
- `components/SignPdfTool.tsx`
- 25+ other files

**Issue:**
Console statements running in production expose debug information and increase bundle size.

```typescript
// ❌ Examples from codebase
console.error('Failed to load docx library:', error);  // pdfUtils.ts:62
console.log('[HANDLE ACTION] Called with file:', file);  // ToolPageClient.tsx:81
console.warn(`Smart detection failed for page ${pageIndex}`, e);  // pdfUtils.ts:274
console.debug('PDF.js cleanup failed', e);  // ToolPageClient.tsx:70
```

**Impact:**
- Exposes internal implementation details to users
- Increases bundle size
- Console spam in production
- Potential security information leakage

**Fix:**
Wrap all console statements in development checks or remove entirely:
```typescript
if (process.env.NODE_ENV === 'development') {
  console.log('[DEBUG]', data);
}
```

---

### 🟠 BUG #3: Hardcoded BASE_URL (Not Environment-Aware)
**Severity:** HIGH (Deployment Flexibility)
**Location:** `lib/metadata.ts:14`

**Issue:**
```typescript
const BASE_URL = 'https://www.pdfcanada.ca';  // ❌ Hardcoded
```

**Impact:**
- Breaks metadata in staging/preview environments
- Canonical URLs point to production from preview
- OpenGraph images use wrong domain
- Hreflang alternates broken in non-prod

**Fix:**
```typescript
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pdfcanada.ca';
```

Add to `.env.production`:
```bash
NEXT_PUBLIC_SITE_URL=https://www.pdfcanada.ca
```

---

## MEDIUM PRIORITY BUGS

### 🟡 BUG #4: No Next.js Image Component Usage
**Severity:** MEDIUM (Performance)
**Location:** Entire codebase

**Issue:**
Despite having comprehensive image optimization config in `next.config.ts:15-22`, **ZERO** components use `next/image`. All images are static `<img>` tags or CSS backgrounds.

```typescript
// next.config.ts HAS this configuration:
images: {
  formats: ['image/avif', 'image/webp'],  // ✅ Configured
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],  // ✅ Configured
  minimumCacheTTL: 31536000,  // ✅ Configured
}

// But NO files use next/image ❌
```

**Impact:**
- Missing automatic AVIF/WebP conversion
- No responsive image sizing
- No lazy loading
- Poor Largest Contentful Paint (LCP)
- Wasted image optimization config

**Files Affected:**
- `/public/og-image.png` (1200x630) - not optimized
- Favicon images - static only
- Guide images (if any)

**Fix:**
```tsx
import Image from 'next/image';

// Replace <img> with:
<Image
  src="/og-image.png"
  alt="PDF Canada"
  width={1200}
  height={630}
  priority  // for above-fold images
/>
```

---

### 🟡 BUG #5: TypeScript Type Safety Issues (84 `any` types)
**Severity:** MEDIUM (Maintainability + Runtime Safety)
**Locations:** 30 files with 84 total instances

**Examples:**
```typescript
// ❌ Loose typing throughout codebase
const [pdfJsDoc, setPdfJsDoc] = useState<any>(null);  // ToolPageClient.tsx:22
let pdfjsLib: any = null;  // pdfUtils.ts:8
const t = translations[lang];  // Missing type annotation
const processNode = async (node: Node) => {  // Missing specific type
  const items = textContent.items as any[];  // pdfUtils.ts:775
}
```

**Impact:**
- No compile-time type checking
- Runtime errors not caught during build
- Poor IDE autocomplete
- Harder to refactor safely

**Fix:**
Define proper interfaces:
```typescript
import type { PDFDocumentProxy } from 'pdfjs-dist';

const [pdfJsDoc, setPdfJsDoc] = useState<PDFDocumentProxy | null>(null);

interface TranslationFunction {
  (key: keyof Translations): string;
}

const t: TranslationFunction = translations[lang];
```

---

### 🟡 BUG #6: Global Window Pollution
**Severity:** MEDIUM (Memory Leaks + SSR Issues)
**Location:** `components/pages/ToolPageClient.tsx` (referenced in code)

**Issue:**
```typescript
// ❌ Pollutes global scope
(window as any).__lastActionError = error;
```

**Impact:**
- SSR incompatibility (window not defined on server)
- Memory leaks (never cleaned up)
- Global namespace pollution
- Debug code leaking to production

**Fix:**
Remove entirely or use proper error tracking:
```typescript
// Option 1: Use error boundary
throw new Error(errorMessage);

// Option 2: Use Sentry/logging service
Sentry.captureException(error);

// Option 3: Local state only
setErrorKey('error.processing');
```

---

### 🟡 BUG #7: Missing Suspense Boundaries
**Severity:** MEDIUM (SEO + UX)
**Location:** App-wide (all client components with dynamic imports)

**Issue:**
Components use dynamic imports but no Suspense wrappers:
```typescript
// ❌ Missing Suspense
const DndContext = dynamic(() => import('@dnd-kit/core')...);

// In parent:
<DndContext>  // No <Suspense> wrapper!
```

**Impact:**
- No React Server Component streaming
- Missing loading states
- SEO: Crawlers may see empty content during load
- Poor Time to Interactive (TTI)

**Fix:**
```tsx
import { Suspense } from 'react';

<Suspense fallback={<LoadingSpinner />}>
  <DynamicComponent />
</Suspense>
```

---

### 🟡 BUG #8: Sitemap Uses Hardcoded Dates
**Severity:** MEDIUM (SEO)
**Location:** `app/sitemap.ts:12-15`

**Issue:**
```typescript
const LAST_MODIFIED_HOMEPAGE = new Date('2024-12-20');  // ❌ Stale date
const LAST_MODIFIED_TOOLS = new Date('2024-12-15');
const LAST_MODIFIED_GUIDES = new Date('2024-12-10');
const LAST_MODIFIED_STATIC = new Date('2024-12-01');
```

**Impact:**
- Search engines see stale `lastModified` dates
- May deprioritize crawling
- Not accurate for content freshness

**Fix:**
```typescript
const LAST_MODIFIED = new Date(); // Current build time

// Or use actual file modification times:
const stats = fs.statSync('./app/[lang]/page.tsx');
const LAST_MODIFIED_HOMEPAGE = stats.mtime;
```

---

## LOW PRIORITY ISSUES

### 🔵 BUG #9: Middleware Regex Performance
**Severity:** LOW (Edge Performance)
**Location:** `middleware.ts:58`

**Issue:**
```typescript
matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
```

Complex negative lookahead regex runs on every request in Edge Runtime.

**Impact:**
- Minor performance overhead on Edge
- Hard to read/maintain

**Fix:**
```typescript
// Clearer alternative:
matcher: [
  '/((?!api|_next|favicon.ico|.*\\..*).*)'
]
```

---

### 🔵 BUG #10: Missing Mobile PWA Meta Tags
**Severity:** LOW (Mobile UX)
**Location:** `app/[lang]/layout.tsx`

**Issue:**
Missing Apple-specific meta tags for better iOS experience.

**Fix:**
```tsx
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

---

## CODE QUALITY ISSUES (Not Bugs)

### 📊 Issue #11: Large Client Component
**File:** `components/pages/ToolPageClient.tsx` (422 lines)
**Recommendation:** Extract PDF processing logic into custom hooks

### 📊 Issue #12: Missing Error Tracking
**Recommendation:** Integrate Sentry or similar for production error monitoring

### 📊 Issue #13: No Bundle Analysis in CI
**Recommendation:** Add bundle size checks to prevent regressions

---

## SUMMARY

| Severity | Count | Status |
|----------|-------|--------|
| 🔴 Critical | 1 | **FIX NOW** |
| 🟠 High | 3 | **FIX BEFORE DEPLOY** |
| 🟡 Medium | 6 | **FIX SOON** |
| 🔵 Low | 2 | **Nice to Have** |
| **TOTAL** | **12** | |

---

## PRIORITY FIX ORDER

1. ✅ JSON-LD script strategy (SEO critical)
2. ✅ Production console statements (security + performance)
3. ✅ Hardcoded BASE_URL (breaks staging)
4. ✅ Next.js Image optimization (performance)
5. TypeScript type safety (maintainability)
6. Global window pollution (memory leaks)
7. Suspense boundaries (UX)
8. Sitemap dates (SEO)

---

**Next Steps:** Implement fixes in priority order and verify with production build.
