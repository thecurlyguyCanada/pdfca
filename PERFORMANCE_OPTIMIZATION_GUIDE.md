# Performance Optimization Guide - pdfcanada.ca

## Executive Summary

This guide documents the aggressive performance optimizations implemented to achieve a **PageSpeed score of 90+** and meet 2026 Core Web Vitals standards.

**Last Updated:** December 25, 2025
**Target:** PageSpeed 90+, LCP < 2.5s, INP < 200ms, CLS < 0.1

---

## Current Performance Issues (Pre-Optimization)

### Baseline Metrics
- **PageSpeed Score:** 75/100 (Needs Improvement)
- **First Contentful Paint:** 4.2s ❌ (Target: < 1.8s)
- **Largest Contentful Paint:** 4.4s ❌ (Target: < 2.5s)
- **Total Blocking Time:** 0ms ✅ (Excellent)
- **Cumulative Layout Shift:** 0 ✅ (Excellent)
- **Speed Index:** 4.2s ⚠️ (Needs Improvement)

### Identified Issues
1. **Unused JavaScript:** 29 KiB of unused code (50% of vendor bundle)
2. **Forced Reflows:** 74ms total reflow time from vendor bundles
3. **Network Dependency:** Critical path latency of 311ms
4. **Missing Preconnect:** No origins preconnected (despite implementation)
5. **Long Main-Thread Tasks:** 1 long task detected
6. **Non-Composited Animations:** 1 animated element

---

## Optimization Strategy

### Phase 1: JavaScript Bundle Optimization

#### 1.1 Aggressive Code Splitting

**Before:**
```javascript
// Single large vendor bundle (58.2 KiB)
manualChunks: {
  'vendor-react': ['react', 'react-dom'],
  'vendor-ui': ['lucide-react', '@dnd-kit', 'react-rnd'],
  // ...
}
```

**After (2026 Optimized):**
```javascript
// Granular splitting for better caching
manualChunks: (id) => {
  if (id.includes('node_modules/react/')) return 'vendor-react';
  if (id.includes('react-router')) return 'vendor-router';
  if (id.includes('lucide-react')) return 'vendor-icons';
  if (id.includes('@dnd-kit')) return 'vendor-dnd';
  if (id.includes('react-helmet')) return 'vendor-helmet';
  // ... 15+ separate chunks
}
```

**Benefits:**
- Smaller initial bundle (estimated 30-40% reduction)
- Better long-term caching (React rarely changes)
- Lazy-loaded non-critical chunks (OCR, DOCX, XLSX)
- Parallel download of multiple small chunks

#### 1.2 Aggressive Terser Minification

**Configuration:**
```javascript
terserOptions: {
  compress: {
    passes: 2,              // Double minification pass
    unsafe_arrows: true,    // Convert to arrow functions
    unsafe_methods: true,   // Optimize method calls
    unsafe_proto: true,     // Optimize prototype access
    pure_funcs: [           // Remove console calls
      'console.log',
      'console.info',
      'console.debug'
    ]
  },
  format: {
    comments: false         // Remove ALL comments
  }
}
```

**Expected Savings:** 10-15% additional compression

#### 1.3 Tree-Shaking Enhancement

**Configuration:**
```javascript
treeshake: {
  moduleSideEffects: false,
  propertyReadSideEffects: false,
  tryCatchDeoptimization: false,
}
```

**Impact:** Removes unused exports and dead code

---

### Phase 2: Critical Rendering Path Optimization

#### 2.1 Remove Invalid Resource Hints

**Problem:**
```html
<!-- This doesn't work in production (file doesn't exist) -->
<link rel="modulepreload" href="/src/main.tsx">

<!-- Unnecessary preload (not LCP element) -->
<link rel="preload" href="/og-image.png" as="image" fetchpriority="high">
```

**Solution:**
```html
<!-- Vite handles modulepreload automatically -->
<!-- Only preload actual LCP elements (hero text in this case) -->
```

#### 2.2 Font Optimization

**Current (Already Optimized):**
```html
<link rel="preload"
  href="https://fonts.gstatic.com/.../Inter.woff2"
  as="font"
  type="font/woff2"
  crossorigin
  fetchpriority="high">
```

```css
@font-face {
  font-family: 'Inter';
  font-display: swap;  /* Prevents invisible text */
}
```

**Status:** ✅ Optimal

#### 2.3 Static HTML for Instant FCP

**Current Implementation:**
```html
<div id="root">
  <!-- Static HTML for instant paint -->
  <div class="static-wrapper">
    <h1 class="hero-title">Modern PDF Tools<br><span>eh?</span></h1>
    <p class="hero-desc">The Polite Canadian PDF Experience...</p>
  </div>
</div>
```

**Status:** ✅ Good - Provides instant FCP before React hydration

---

### Phase 3: Addressing Forced Reflows

#### 3.1 Problem Analysis

**Source:**
```
Forced reflow issues:
- /assets/vendor-re...js:21:1848 → 27ms (vendor bundle)
- [unattributed] → 47ms
- /assets/index-BdbetvvR.js → 27ms
Total: 74ms of forced reflows
```

**Root Cause:**
JavaScript is querying geometric properties (offsetWidth, etc.) after style changes, forcing browser reflows.

#### 3.2 Mitigation Strategies

**1. Use CSS Containment (where appropriate)**
```css
.tool-card {
  contain: layout style;  /* Isolate layout calculations */
}
```

**2. Batch DOM Reads/Writes**
```javascript
// ❌ Bad: Alternating reads and writes
element.style.width = '100px';
const height = element.offsetHeight;  // FORCES REFLOW
element.style.height = height + 'px';

// ✅ Good: Batch reads, then writes
const height = element.offsetHeight;  // Read
requestAnimationFrame(() => {
  element.style.width = '100px';      // Write
  element.style.height = height + 'px';
});
```

**3. Use `will-change` Sparingly**
```css
.animated-element {
  will-change: transform;  /* GPU-accelerated, avoids reflows */
}
```

#### 3.3 Implementation in Vendor Code

Since forced reflows come from vendor bundles (React, libraries), we can:

1. **Upgrade Dependencies** - Ensure latest versions with performance fixes
2. **Virtual Scrolling** - For large lists (DnD kit, organize PDF)
3. **Debounce Geometric Calculations** - Reduce frequency of layout queries

---

### Phase 4: Network Optimization

#### 4.1 Critical Path Reduction

**Current:**
```
Initial Navigation
  https://www.pdfcanada.ca - 176ms, 4.41 KiB
    /assets/index-BdbetvvR.js - 311ms, 55.01 KiB
```

**Issues:**
- 311ms for main JavaScript bundle
- Blocking execution

**Solutions:**

**1. Enable Compression** (Server-side)
```nginx
# Netlify/Vercel automatically handles this
Content-Encoding: gzip  # or br (Brotli, better)
```

**Expected Savings:** 70-80% file size reduction

**2. HTTP/2 Server Push** (if available)
```html
<!-- Server pushes critical resources -->
Link: </assets/vendor-react.js>; rel=preload; as=script
```

**3. Resource Hints** (Already Implemented)
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://vercel.live">
```

#### 4.2 Lazy Loading Strategy

**Heavy Libraries (Lazy Load):**
- Tesseract.js (OCR) - 2MB+
- HEIC2Any - 500KB+
- DOCX/Mammoth - 300KB+
- XLSX - 500KB+
- unrar-js (CBR/CBZ) - 1MB+

**Implementation:**
```javascript
// Load only when tool is used
const OCRTool = lazy(() => import('./tools/OCRTool'));
const HEICConverter = lazy(() => import('./tools/HEICConverter'));
```

---

### Phase 5: Animation Optimization

#### 5.1 Non-Composited Animations Issue

**Problem:** 1 animated element not using GPU acceleration

**Diagnosis:**
```javascript
// ❌ Bad: CPU-bound animation
element.style.left = x + 'px';  // Triggers layout

// ✅ Good: GPU-accelerated
element.style.transform = `translateX(${x}px)`;  // Composite layer
```

**Solution:**
```css
.animated {
  transform: translateX(0);  /* Use transform */
  will-change: transform;     /* Hint for GPU layer */
  transition: transform 300ms ease;
}
```

#### 5.2 Reduce Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Phase 6: Long Main-Thread Tasks

#### 6.1 Problem

**Detection:** 1 long task found (> 50ms blocking time)

**Solution: Task Splitting**

```javascript
// ❌ Bad: Long synchronous task
function processLargeArray(items) {
  items.forEach(item => heavyProcess(item));
}

// ✅ Good: Split into chunks
async function processLargeArrayAsync(items) {
  const CHUNK_SIZE = 100;
  for (let i = 0; i < items.length; i += CHUNK_SIZE) {
    const chunk = items.slice(i, i + CHUNK_SIZE);
    await processChunk(chunk);

    // Yield to main thread
    await new Promise(resolve => setTimeout(resolve, 0));
  }
}
```

#### 6.2 Use Web Workers for Heavy Computation

```javascript
// Offload PDF processing to worker thread
const worker = new Worker('/workers/pdf-processor.js');
worker.postMessage({ pdf: pdfData });
worker.onmessage = (e) => {
  const result = e.data;
  updateUI(result);
};
```

---

## Implementation Checklist

### Immediate Actions (Production Ready)

- [x] Enable aggressive Terser minification (2 passes)
- [x] Implement granular code splitting (15+ chunks)
- [x] Enable tree-shaking optimization
- [x] Remove invalid resource hints
- [x] Optimize critical CSS
- [ ] **Deploy and test** - Measure actual impact
- [ ] **Enable Brotli compression** (server-side)
- [ ] **Monitor RUM data** in production

### Short-term Optimizations (Week 1)

- [ ] Audit and fix forced reflows in custom code
- [ ] Implement lazy loading for heavy libraries
- [ ] Add Web Worker for PDF processing
- [ ] Optimize animations for GPU compositing
- [ ] Implement task splitting for long operations
- [ ] Add performance monitoring

### Medium-term Enhancements (Month 1)

- [ ] Implement virtual scrolling for large PDF lists
- [ ] Optimize images with modern formats (AVIF fallback)
- [ ] Add service worker for offline support & caching
- [ ] Implement route-based code splitting
- [ ] Add performance budget monitoring in CI/CD

### Long-term Goals (Quarter 1 2026)

- [ ] Achieve PageSpeed score 95+
- [ ] LCP < 2.0s (75th percentile)
- [ ] INP < 150ms
- [ ] Implement edge caching (Cloudflare/Vercel)
- [ ] Add predictive prefetching

---

## Measurement & Monitoring

### Field Data (Real Users)

**Chrome User Experience Report (CrUX):**
```bash
# Check monthly CrUX data
https://developers.google.com/speed/pagespeed/insights/?url=https://www.pdfcanada.ca
```

**Web Vitals Library:**
```javascript
import {onCLS, onINP, onLCP} from 'web-vitals';

function sendToAnalytics(metric) {
  navigator.sendBeacon('/analytics', JSON.stringify(metric));
}

onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
```

### Lab Data (Synthetic)

**Lighthouse CI:**
```bash
npm install -g @lhci/cli
lhci autorun --collect.url=https://www.pdfcanada.ca
```

**Performance Budget:**
```json
{
  "budgets": [
    {
      "resourceType": "script",
      "budget": 200
    },
    {
      "resourceType": "total",
      "budget": 1000
    }
  ]
}
```

---

## Expected Performance Improvements

### Conservative Estimates

| Metric | Before | After | Target |
|--------|--------|-------|--------|
| **PageSpeed Score** | 75 | **85-90** | 90+ |
| **FCP** | 4.2s | **2.5-3.0s** | < 1.8s |
| **LCP** | 4.4s | **2.0-2.5s** | < 2.5s |
| **TBT** | 0ms | **0ms** | < 200ms |
| **CLS** | 0 | **0** | < 0.1 |
| **Bundle Size** | 58.2 KiB | **35-40 KiB** | < 50 KiB |

### Optimistic Estimates (with all optimizations)

| Metric | Target |
|--------|--------|
| **PageSpeed Score** | **92-95** |
| **FCP** | **< 1.5s** |
| **LCP** | **< 1.8s** |
| **INP** | **< 150ms** |
| **Total Page Weight** | **< 500 KB** |

---

## Troubleshooting

### LCP Still Slow?

1. **Check Network Tab** - Is main bundle downloading slowly?
   - Enable compression (Brotli/Gzip)
   - Use CDN for assets

2. **Check LCP Element** - What's actually the LCP?
   - Use Chrome DevTools > Performance > Web Vitals
   - Optimize that specific element

3. **Font Loading** - Is font blocking render?
   - Verify `font-display: swap` is working
   - Use `preload` for critical fonts

### Forced Reflows Persist?

1. **Profile in Chrome DevTools**
   ```
   Performance tab > Record > Look for "Recalculate Style" and "Layout"
   ```

2. **Common Culprits:**
   - Reading `offsetWidth/Height` after style change
   - Animations not using `transform`
   - Third-party scripts measuring DOM

3. **Solutions:**
   - Batch DOM operations
   - Use `requestAnimationFrame`
   - Add CSS containment

### Bundle Still Too Large?

1. **Analyze Bundle**
   ```bash
   npm run build
   npx vite-bundle-visualizer
   ```

2. **Check for:**
   - Duplicate dependencies
   - Unused imports
   - Large libraries that can be lazy-loaded

---

## Production Deployment Checklist

### Pre-Deploy

- [ ] Run `npm run build` successfully
- [ ] Verify bundle sizes are acceptable
- [ ] Test in production mode locally (`npm run preview`)
- [ ] Run Lighthouse audit on preview
- [ ] Check for console errors

### Deploy

- [ ] Deploy to staging environment first
- [ ] Run PageSpeed Insights on staging
- [ ] Verify Core Web Vitals pass thresholds
- [ ] Check mobile and desktop scores
- [ ] Test on low-end devices (throttled)

### Post-Deploy

- [ ] Monitor error logs for JS errors
- [ ] Check analytics for bounce rate changes
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Compare before/after metrics
- [ ] Collect user feedback

---

## Resources

### Tools

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report)
- [Web Vitals Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)

### Documentation

- [Web Vitals](https://web.dev/vitals/)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)
- [Rollup Code Splitting](https://rollupjs.org/guide/en/#code-splitting)

---

**Version:** 1.0
**Last Updated:** December 25, 2025
**Author:** pdfcanada.ca Performance Team
**Status:** Implementation in Progress
