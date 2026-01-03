# Core Web Vitals 2026 Optimization Guide

## Overview

This document provides a comprehensive guide for optimizing Core Web Vitals to meet 2026 standards, with special focus on INP (Interaction to Next Paint), which replaced FID in March 2024.

**Last Updated:** December 25, 2025
**Target:** Google Core Web Vitals 2026 Standards

---

## 1. INP (Interaction to Next Paint) - The New Metric

### What is INP?

INP measures the time between a user interaction (click, tap, key press) and when the browser renders the next visual update. It replaced First Input Delay (FID) in March 2024.

### Thresholds

| Rating | INP Score |
|--------|-----------|
| **Good** 🟢 | < 200ms |
| **Needs Improvement** 🟡 | 200-500ms |
| **Poor** 🔴 | > 500ms |

### Why INP Matters in 2026

- **User Experience:** Directly correlates with perceived responsiveness
- **SEO Impact:** Core Web Vitals are a confirmed ranking factor
- **Mobile-First:** Critical for mobile performance where INP issues are more common
- **AI Search:** Google SGE prioritizes fast, responsive sites

---

## 2. INP Optimization Strategies

### 2.1 Minimize JavaScript Execution Time

#### Problem
Long-running JavaScript blocks the main thread, delaying visual updates.

#### Solutions Implemented

```javascript
// ✅ Use Web Workers for heavy computations
const worker = new Worker('/workers/pdf-processor.js');

// ✅ Break up long tasks
async function processLargeDataset(data) {
  const chunks = chunkArray(data, 100);
  for (const chunk of chunks) {
    await processChunk(chunk);
    await new Promise(resolve => setTimeout(resolve, 0)); // Yield to main thread
  }
}

// ✅ Use requestIdleCallback for non-critical work
requestIdleCallback(() => {
  // Non-critical analytics, prefetching, etc.
});
```

### 2.2 Optimize Event Handlers

#### Problem
Heavy event handlers block the main thread.

#### Solutions

```javascript
// ❌ Bad: Synchronous, blocking event handler
button.addEventListener('click', () => {
  processHeavyComputation();
  updateUI();
});

// ✅ Good: Async with debouncing
const debouncedHandler = debounce(async () => {
  await processHeavyComputation();
  updateUI();
}, 100);

button.addEventListener('click', debouncedHandler);

// ✅ Good: Use passive listeners where possible
window.addEventListener('scroll', handleScroll, { passive: true });
```

### 2.3 Reduce Input Delay

#### Strategies

1. **Prioritize Critical JavaScript**
   ```html
   <!-- Load critical scripts first -->
   <script src="/critical.js" fetchpriority="high"></script>

   <!-- Defer non-critical scripts -->
   <script src="/analytics.js" defer></script>
   ```

2. **Code Splitting**
   ```javascript
   // Dynamic imports for route-based code splitting
   const ToolPage = lazy(() => import('./pages/ToolPage'));
   ```

3. **Tree Shaking**
   - Remove unused code
   - Import only what you need
   ```javascript
   // ❌ Imports entire library
   import _ from 'lodash';

   // ✅ Import only needed functions
   import debounce from 'lodash/debounce';
   ```

---

## 3. LCP (Largest Contentful Paint) - 2026 Standards

### Thresholds

| Rating | LCP Score |
|--------|-----------|
| **Good** 🟢 | < 2.5s |
| **Needs Improvement** 🟡 | 2.5-4.0s |
| **Poor** 🔴 | > 4.0s |

### 3.1 Optimization Techniques

#### Image Optimization

```html
<!-- ✅ Preload LCP image -->
<link rel="preload" href="/hero-image.webp" as="image" fetchpriority="high">

<!-- ✅ Use modern formats with fallbacks -->
<picture>
  <source srcset="/hero.avif" type="image/avif">
  <source srcset="/hero.webp" type="image/webp">
  <img src="/hero.jpg" alt="Hero" width="1200" height="630" fetchpriority="high">
</picture>

<!-- ✅ Responsive images -->
<img
  srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
  src="large.jpg"
  alt="Responsive image"
>
```

#### Font Optimization

```html
<!-- ✅ Preload critical fonts -->
<link
  rel="preload"
  href="/fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossorigin
  fetchpriority="high"
>

<!-- ✅ Use font-display: swap -->
<style>
  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: url('/fonts/inter-var.woff2') format('woff2');
  }
</style>
```

#### Resource Hints

```html
<!-- DNS Prefetch: Resolve DNS early -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Preconnect: Establish early connection -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Prefetch: Load resources for next navigation -->
<link rel="prefetch" href="/next-page.html">

<!-- Modulepreload: Preload ES modules -->
<link rel="modulepreload" href="/app.js">
```

---

## 4. CLS (Cumulative Layout Shift) - 2026 Standards

### Thresholds

| Rating | CLS Score |
|--------|-----------|
| **Good** 🟢 | < 0.1 |
| **Needs Improvement** 🟡 | 0.1-0.25 |
| **Poor** 🔴 | > 0.25 |

### 4.1 Common Causes & Fixes

#### Images Without Dimensions

```html
<!-- ❌ Bad: No dimensions -->
<img src="photo.jpg" alt="Photo">

<!-- ✅ Good: Include width and height -->
<img src="photo.jpg" alt="Photo" width="800" height="600">

<!-- ✅ Good: Use aspect-ratio -->
<style>
  .responsive-image {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
</style>
<img src="photo.jpg" alt="Photo" class="responsive-image">
```

#### Font Loading

```css
/* ❌ Bad: Invisible text during font load */
@font-face {
  font-family: 'MyFont';
  font-display: block; /* or auto */
}

/* ✅ Good: Swap to fallback immediately */
@font-face {
  font-family: 'MyFont';
  font-display: swap;
}

/* ✅ Better: Use optional for non-critical fonts */
@font-face {
  font-family: 'DecoFont';
  font-display: optional;
}
```

#### Dynamic Content Insertion

```javascript
// ❌ Bad: Insert without reserving space
container.innerHTML = fetchedContent;

// ✅ Good: Reserve space with skeleton
container.innerHTML = '<div class="skeleton" style="height: 200px"></div>';
const content = await fetchContent();
container.innerHTML = content;
```

#### Ads and Embeds

```html
<!-- ✅ Reserve space for ads -->
<div class="ad-container" style="min-height: 250px;">
  <!-- Ad will load here -->
</div>

<!-- ✅ Use CSS containment -->
<style>
  .ad-container {
    contain: layout;
  }
</style>
```

---

## 5. Measuring Core Web Vitals

### 5.1 Field Data (Real User Monitoring)

#### Chrome User Experience Report (CrUX)

```bash
# View CrUX data in PageSpeed Insights
https://pagespeed.web.dev/?url=https://www.pdfcanada.ca

# BigQuery for advanced analysis
SELECT
  origin,
  form_factor,
  ROUND(experimental.popularity.rank, 0) AS rank,
  p75_lcp,
  p75_inp,
  p75_cls
FROM `chrome-ux-report.all.202512`
WHERE origin = 'https://www.pdfcanada.ca'
```

#### Web Vitals JavaScript Library

```javascript
import {onCLS, onINP, onLCP} from 'web-vitals';

onCLS(console.log);
onINP(console.log);
onLCP(console.log);

// Send to analytics
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', {body, method: 'POST', keepalive: true});
}

onCLS(sendToAnalytics);
onINP(sendToAnalytics);
onLCP(sendToAnalytics);
```

### 5.2 Lab Data (Synthetic Testing)

#### Lighthouse

```bash
# Run Lighthouse CLI
npx lighthouse https://www.pdfcanada.ca \
  --only-categories=performance \
  --output=html \
  --output-path=./lighthouse-report.html

# Run Lighthouse CI
npm install -g @lhci/cli
lhci autorun
```

#### PageSpeed Insights API

```bash
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.pdfcanada.ca&category=PERFORMANCE"
```

---

## 6. Performance Budget

### 6.1 Resource Limits

| Resource | Budget | Rationale |
|----------|--------|-----------|
| **Total Page Weight** | 1 MB | Mobile data considerations |
| **JavaScript** | 200 KB | Faster parsing/execution |
| **CSS** | 50 KB | Quick rendering |
| **Images** | 500 KB | Largest component, optimized |
| **Fonts** | 100 KB | Subset fonts, WOFF2 |
| **Third-party** | 150 KB | Analytics, utilities |

### 6.2 Timing Budgets

| Metric | Budget | Priority |
|--------|--------|----------|
| **First Contentful Paint** | 1.8s | High |
| **Largest Contentful Paint** | 2.5s | Critical |
| **Interaction to Next Paint** | 200ms | Critical |
| **Cumulative Layout Shift** | 0.1 | High |
| **Time to Interactive** | 3.8s | Medium |
| **Total Blocking Time** | 200ms | Medium |

---

## 7. 2026-Specific Optimizations

### 7.1 Speculation Rules API

```html
<script type="speculationrules">
{
  "prerender": [
    {"source": "list", "urls": ["/merge-pdf", "/split-pdf"]}
  ],
  "prefetch": [
    {"source": "document", "where": {"href_matches": "/guides/*"}}
  ]
}
</script>
```

### 7.2 Priority Hints

```html
<!-- High priority for LCP image -->
<img src="/hero.jpg" fetchpriority="high">

<!-- Low priority for below-fold images -->
<img src="/footer-logo.jpg" fetchpriority="low" loading="lazy">

<!-- High priority for critical CSS -->
<link rel="stylesheet" href="/critical.css" fetchpriority="high">
```

### 7.3 Container Queries

```css
/* More efficient than JavaScript-based layouts */
@container (min-width: 700px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

---

## 8. Mobile-First Performance

### 8.1 Mobile-Specific Optimizations

```javascript
// Detect mobile and adjust quality
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Load lower quality images on mobile
const imageQuality = isMobile ? 'medium' : 'high';

// Reduce animations on low-end devices
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

### 8.2 Network-Aware Loading

```javascript
// Check connection quality
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

if (connection) {
  if (connection.effectiveType === '4g') {
    // Load high-quality assets
  } else {
    // Load optimized assets
  }

  if (connection.saveData) {
    // Load minimal assets
  }
}
```

---

## 9. Monitoring & Alerting

### 9.1 Real User Monitoring Setup

```javascript
// Custom RUM implementation
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.initObservers();
  }

  initObservers() {
    // Monitor LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
    }).observe({type: 'largest-contentful-paint', buffered: true});

    // Monitor INP
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const duration = entry.processingEnd - entry.processingStart;
        this.metrics.inp = Math.max(this.metrics.inp || 0, duration);
      }
    }).observe({type: 'event', buffered: true, durationThreshold: 16});

    // Monitor CLS
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          this.metrics.cls = (this.metrics.cls || 0) + entry.value;
        }
      }
    }).observe({type: 'layout-shift', buffered: true});
  }

  sendMetrics() {
    navigator.sendBeacon('/vitals', JSON.stringify(this.metrics));
  }
}

// Initialize monitoring
const monitor = new PerformanceMonitor();
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    monitor.sendMetrics();
  }
});
```

### 9.2 Alert Thresholds

Set up alerts when metrics exceed thresholds:

```javascript
if (metrics.inp > 200) {
  console.warn('⚠️ INP exceeds 200ms threshold');
  sendAlert('INP_THRESHOLD_EXCEEDED', metrics.inp);
}

if (metrics.lcp > 2500) {
  console.warn('⚠️ LCP exceeds 2.5s threshold');
  sendAlert('LCP_THRESHOLD_EXCEEDED', metrics.lcp);
}

if (metrics.cls > 0.1) {
  console.warn('⚠️ CLS exceeds 0.1 threshold');
  sendAlert('CLS_THRESHOLD_EXCEEDED', metrics.cls);
}
```

---

## 10. Continuous Optimization Checklist

### Daily
- [ ] Monitor Core Web Vitals dashboard
- [ ] Review error logs for performance issues
- [ ] Check third-party script performance

### Weekly
- [ ] Run Lighthouse audits
- [ ] Review RUM data trends
- [ ] Check for new performance regressions

### Monthly
- [ ] Full performance audit
- [ ] Update performance budget
- [ ] Review and optimize critical rendering path
- [ ] Test on low-end devices

### Quarterly
- [ ] Comprehensive performance review
- [ ] Update optimization strategies
- [ ] Benchmark against competitors
- [ ] Review and update documentation

---

## Resources

### Official Documentation
- [Web Vitals](https://web.dev/vitals/)
- [INP Optimization](https://web.dev/articles/optimize-inp)
- [LCP Optimization](https://web.dev/articles/optimize-lcp)
- [CLS Optimization](https://web.dev/articles/optimize-cls)

### Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://github.com/GoogleChrome/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

---

**Last Updated:** December 25, 2025
**Version:** 1.0 (2026 Standards)
**Maintained by:** pdfcanada.ca Development Team
