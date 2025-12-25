# Image Optimization Guide for pdfcanada.ca

## Overview
This guide provides instructions for optimizing images to improve SEO, page load speed, and overall performance.

## Current Status

### Images Requiring Optimization

| File | Current Size | Target Size | Priority | Tool |
|------|-------------|-------------|----------|------|
| `public/og-image.png` | 50KB | <30KB | HIGH | TinyPNG/ImageOptim |
| `public/android-chrome-512x512.png` | 15KB | <10KB | MEDIUM | TinyPNG/ImageOptim |
| `public/android-chrome-192x192.png` | 3.7KB | <3KB | LOW | TinyPNG |
| `public/apple-touch-icon.png` | 3.4KB | <3KB | LOW | TinyPNG |

---

## Why Optimize Images?

1. **Faster Page Load**: Smaller images load faster, improving Core Web Vitals (LCP)
2. **Better SEO**: Google prioritizes fast-loading pages in search rankings
3. **Reduced Bandwidth**: Lower hosting costs and faster mobile experience
4. **Social Sharing**: Optimized OG images load faster on Facebook/Twitter/LinkedIn

---

## Optimization Methods

### Method 1: TinyPNG (Recommended - Online)
**Best for: PNG files**

1. Visit https://tinypng.com
2. Upload your PNG image
3. Download the compressed version
4. Replace the original file

**Pros:**
- Free for up to 20 images
- Excellent compression ratio (50-70% reduction)
- Maintains visual quality

**Cons:**
- Requires internet connection
- Manual process

---

### Method 2: ImageOptim (macOS)
**Best for: Batch processing**

1. Download from https://imageoptim.com
2. Drag and drop images into the app
3. Wait for compression to complete
4. Files are automatically replaced

**Pros:**
- One-click batch processing
- Multiple compression algorithms
- Free and open-source

**Cons:**
- macOS only
- No cloud backup

---

### Method 3: Squoosh (Web App)
**Best for: Advanced control**

1. Visit https://squoosh.app
2. Upload image
3. Adjust quality settings
4. Compare before/after
5. Download optimized image

**Pros:**
- Works offline (PWA)
- Side-by-side comparison
- Multiple format support (WebP, AVIF, MozJPEG)

**Cons:**
- One image at a time
- More manual work

---

### Method 4: Command Line (Advanced)
**Best for: Automation/CI/CD**

#### Install ImageMagick
```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick

# Windows (via Chocolatey)
choco install imagemagick
```

#### Optimize PNG
```bash
# Compress og-image.png
convert public/og-image.png -strip -quality 85% -define png:compression-level=9 public/og-image-optimized.png

# Batch optimize all PNGs in public/
for file in public/*.png; do
  convert "$file" -strip -quality 85% -define png:compression-level=9 "${file%.png}-optimized.png"
done
```

#### Optimize to WebP (Modern Format)
```bash
# Convert to WebP (better compression)
cwebp -q 80 public/og-image.png -o public/og-image.webp
```

---

## Step-by-Step: Optimize OG Image

### Current Issue
- `og-image.png` is 50KB
- Should be <30KB for optimal social sharing
- Large file slows down preview generation on Facebook/Twitter

### Solution

1. **Download TinyPNG Desktop** (Free)
   - macOS: https://tinypng.com/analyzer
   - Windows: Use https://tinypng.com web version

2. **Compress the Image**
   ```bash
   # Manual: Upload public/og-image.png to https://tinypng.com
   # OR use command line:
   curl --upload-file public/og-image.png https://tinypng.com/api/output -o public/og-image-compressed.png
   ```

3. **Verify Size**
   ```bash
   ls -lh public/og-image*.png
   # Should show <30KB
   ```

4. **Replace Original**
   ```bash
   mv public/og-image-compressed.png public/og-image.png
   ```

5. **Test Social Sharing**
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

## Advanced: Convert to WebP + PNG Fallback

### Why WebP?
- 25-35% smaller than PNG
- Supported by 95%+ of browsers
- Lossless and lossy compression

### Implementation

1. **Generate WebP version**
   ```bash
   cwebp -q 80 public/og-image.png -o public/og-image.webp
   ```

2. **Update HTML (if serving directly)**
   ```html
   <picture>
     <source srcset="/og-image.webp" type="image/webp">
     <img src="/og-image.png" alt="pdfcanada.ca - Free PDF Tools">
   </picture>
   ```

3. **For Open Graph** (keep PNG, but optimize it)
   ```html
   <meta property="og:image" content="https://www.pdfcanada.ca/og-image.png">
   ```
   *Note: Social platforms don't support WebP in OG tags yet*

---

## Automation Script

Create `scripts/optimize-images.sh`:

```bash
#!/bin/bash

# Optimize all PNG images in public/
for file in public/*.png; do
  echo "Optimizing $file..."

  # Backup original
  cp "$file" "${file%.png}-original.png"

  # Optimize PNG
  convert "$file" -strip -quality 85% -define png:compression-level=9 "$file"

  # Show size comparison
  original_size=$(stat -f%z "${file%.png}-original.png")
  new_size=$(stat -f%z "$file")
  reduction=$((100 - (new_size * 100 / original_size)))

  echo "  Original: ${original_size} bytes"
  echo "  Optimized: ${new_size} bytes"
  echo "  Reduction: ${reduction}%"
  echo ""
done

echo "✅ All images optimized!"
```

Make executable:
```bash
chmod +x scripts/optimize-images.sh
./scripts/optimize-images.sh
```

---

## Checklist

- [ ] Compress `og-image.png` from 50KB to <30KB
- [ ] Compress `android-chrome-512x512.png` from 15KB to <10KB
- [ ] Compress `android-chrome-192x192.png` (optional)
- [ ] Compress `apple-touch-icon.png` (optional)
- [ ] Test OG image on Facebook Debugger
- [ ] Test OG image on Twitter Card Validator
- [ ] Verify page load speed improvement with PageSpeed Insights
- [ ] Update this guide with actual results

---

## Expected Impact

After optimization:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Total image size | 72.1KB | <46KB | -36% |
| OG image load time | ~150ms | <90ms | -40% |
| First Load JS | N/A | N/A | Better LCP |
| PageSpeed Score | Current | +5-10 points | Better SEO |

---

## Testing After Optimization

1. **Verify File Sizes**
   ```bash
   ls -lh public/*.png
   ```

2. **Test Page Load**
   - PageSpeed Insights: https://pagespeed.web.dev/?url=https://www.pdfcanada.ca
   - GTmetrix: https://gtmetrix.com

3. **Test Social Sharing**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

4. **Clear CDN Cache** (if applicable)
   ```bash
   # Vercel
   vercel --prod --force

   # Netlify
   netlify deploy --prod
   ```

---

## References

- [TinyPNG](https://tinypng.com) - Online PNG/JPEG compressor
- [ImageOptim](https://imageoptim.com) - macOS image optimizer
- [Squoosh](https://squoosh.app) - Google's web-based image optimizer
- [WebP Documentation](https://developers.google.com/speed/webp)
- [Open Graph Image Best Practices](https://developers.facebook.com/docs/sharing/webmasters/images/)

---

## Notes

- Always keep original uncompressed images in a separate folder
- Use version control (git) to track changes
- Test on multiple devices after optimization
- Monitor Core Web Vitals after deployment

**Last Updated:** 2025-12-25
