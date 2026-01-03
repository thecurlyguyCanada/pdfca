# OG Image Optimization Guide

## Current Status
- **File:** `public/og-image.png`
- **Size:** 50KB
- **Dimensions:** 1200×630px (standard OG size)

## Target
- **Size:** 20-30KB (40% reduction)
- **Format:** WebP (preferred) or optimized PNG
- **Dimensions:** Keep 1200×630px (required for social media)

## How to Optimize

### Option 1: Use Squoosh (Recommended)
1. Go to https://squoosh.app/
2. Upload your `public/og-image.png`
3. Settings:
   - **Format:** WebP
   - **Quality:** 80-85
   - **Effort:** 6 (maximum compression)
4. Download as `og-image.webp`
5. **Also create PNG fallback:**
   - Format: OxiPNG
   - Effort: 6
   - Download as `og-image.png`

### Option 2: Use TinyPNG
1. Go to https://tinypng.com/
2. Upload `public/og-image.png`
3. Download compressed version
4. Should be ~30-35KB

### Option 3: Use ImageMagick (if available)
```bash
# Create WebP version (best compression)
convert public/og-image.png -quality 85 -define webp:method=6 public/og-image.webp

# Optimize PNG version
pngquant --quality=80-90 --speed 1 public/og-image.png -o public/og-image-optimized.png
```

## After Optimization

### If using WebP:
Replace in `index.html` (lines 61-65):
```html
<!-- BEFORE -->
<meta property="og:image" content="https://www.pdfcanada.ca/og-image.png">

<!-- AFTER -->
<meta property="og:image" content="https://www.pdfcanada.ca/og-image.webp">
<meta property="og:image:type" content="image/webp">

<!-- Keep PNG fallback for older clients -->
<link rel="alternate" type="image/png" href="https://www.pdfcanada.ca/og-image.png">
```

### If using optimized PNG:
Just replace the file in `public/og-image.png` - no code changes needed!

## Expected Impact
- **Bundle size:** -20-30KB
- **LCP improvement:** -0.2-0.5s (if og-image is LCP element)
- **PageSpeed score:** +1-2 points

## Verification
After deploying:
1. Check file size: `ls -lh public/og-image.*`
2. Test social preview:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/
3. Run PageSpeed: https://pagespeed.web.dev/
