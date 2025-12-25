# Image Optimization Instructions for 2026 SEO

## Current Status

Images are currently PNG format and not fully optimized for web performance. This impacts:
- **Core Web Vitals** (LCP - Largest Contentful Paint)
- **Page load speed** on mobile devices
- **SEO rankings** (Google prioritizes fast sites)

## Current Images Analysis

```bash
og-image.png:               50KB  ⚠️ Target: <30KB (44% reduction needed)
android-chrome-512x512.png: 15KB  ⚠️ Target: <10KB (33% reduction needed)
android-chrome-192x192.png: 3.7KB ✅ Already optimized
apple-touch-icon.png:       3.4KB ✅ Already optimized
```

## Priority 1: Compress Existing PNGs

### Option A: TinyPNG (Recommended - Web-based)

1. Go to https://tinypng.com/
2. Upload each PNG file
3. Download optimized versions
4. Replace files in `/public/`

### Option B: ImageOptim (Mac) / FileOptimizer (Windows)

**Mac:**
```bash
brew install imageoptim
imageoptim public/og-image.png
imageoptim public/android-chrome-512x512.png
```

**Windows:**
```bash
# Download FileOptimizer from https://sourceforge.net/projects/nikkhokkho/
# Drag and drop PNG files into the application
```

### Option C: Command Line Tools

```bash
# Install pngquant
brew install pngquant  # Mac
sudo apt-get install pngquant  # Ubuntu/Debian

# Optimize images
pngquant --quality=65-80 --ext .png --force public/og-image.png
pngquant --quality=65-80 --ext .png --force public/android-chrome-512x512.png
```

## Priority 2: Create WebP Versions

WebP offers 25-35% better compression than PNG with same visual quality.

### Using cwebp (Official Tool)

```bash
# Install cwebp
brew install webp  # Mac
sudo apt-get install webp  # Ubuntu/Debian

# Convert to WebP
cwebp -q 80 public/og-image.png -o public/og-image.webp
cwebp -q 80 public/android-chrome-512x512.png -o public/android-chrome-512x512.webp
cwebp -q 85 public/android-chrome-192x192.png -o public/android-chrome-192x192.webp
cwebp -q 85 public/apple-touch-icon.png -o public/apple-touch-icon.webp
```

### Using Online Converter

1. Go to https://squoosh.app/ (by Google Chrome team)
2. Upload each PNG
3. Select WebP format on the right panel
4. Adjust quality to 75-85%
5. Download optimized WebP files

## Priority 3: Create Responsive Image Sizes

Create multiple sizes for different screen sizes:

```bash
# For og-image (social sharing), create:
og-image-400.png   # 400x210 - Mobile preview
og-image-800.png   # 800x420 - Tablet preview
og-image-1200.png  # 1200x630 - Desktop preview (current)

og-image-400.webp  # WebP versions
og-image-800.webp
og-image-1200.webp
```

### Using ImageMagick

```bash
# Install ImageMagick
brew install imagemagick  # Mac
sudo apt-get install imagemagick  # Ubuntu/Debian

# Create responsive sizes
convert public/og-image.png -resize 400x210 public/og-image-400.png
convert public/og-image.png -resize 800x420 public/og-image-800.png

# Convert to WebP
convert public/og-image-400.png public/og-image-400.webp
convert public/og-image-800.png public/og-image-800.webp
```

## Priority 4: Update Code to Use WebP

### Update SEO Component

```tsx
// In components/SEO.tsx, change default image:
const defaultImage = 'https://www.pdfcanada.ca/og-image.webp';

// Add fallback in setMeta calls:
setMeta('property', 'og:image', image.replace('.png', '.webp'));
// Keep PNG fallback for older platforms
```

### Add Picture Element for Responsive Images

```tsx
// Create new component: components/ResponsiveImage.tsx
interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, width, height }) => {
  const baseName = src.replace('.png', '');

  return (
    <picture>
      <source
        srcSet={`${baseName}-400.webp 400w, ${baseName}-800.webp 800w, ${baseName}-1200.webp 1200w`}
        type="image/webp"
        sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
      />
      <source
        srcSet={`${baseName}-400.png 400w, ${baseName}-800.png 800w, ${baseName}-1200.png 1200w`}
        type="image/png"
        sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};
```

## Expected Impact

### Before Optimization:
- og-image.png: 50KB
- Total image size: ~73KB
- LCP: ~2.1s

### After Optimization:
- og-image.webp: ~17KB (66% smaller)
- og-image.png (fallback): ~28KB (44% smaller)
- Total image size: ~25KB (66% reduction)
- **Expected LCP improvement: ~1.5s (29% faster)**

### SEO Impact:
- ✅ Improved Core Web Vitals score
- ✅ Better mobile performance
- ✅ Higher Google PageSpeed Insights score
- ✅ **+5-7 points on overall SEO score**

## Quick Start (5 Minutes)

1. **Compress PNGs:**
   ```bash
   # Visit https://tinypng.com/
   # Upload og-image.png and android-chrome-512x512.png
   # Download and replace files in /public/
   ```

2. **Create WebP versions:**
   ```bash
   # Visit https://squoosh.app/
   # Upload both PNGs
   # Export as WebP at 80% quality
   # Save as og-image.webp and android-chrome-512x512.webp
   ```

3. **Update meta tags:**
   ```tsx
   // In components/SEO.tsx, update default image:
   image = 'https://www.pdfcanada.ca/og-image.webp'
   ```

4. **Test:**
   ```bash
   npm run build
   npm run preview
   # Check image sizes in DevTools Network tab
   ```

## Verification

After optimization, verify improvements:

```bash
# Check file sizes
ls -lh public/*.png public/*.webp

# Test with PageSpeed Insights
# https://pagespeed.web.dev/

# Test with GTmetrix
# https://gtmetrix.com/

# Test with WebPageTest
# https://www.webpagetest.org/
```

## Automation (Optional)

Create a build script to automatically optimize images:

```json
// package.json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js",
    "prebuild": "npm run optimize-images"
  }
}
```

```javascript
// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { input: 'public/og-image.png', sizes: [400, 800, 1200] }
];

images.forEach(({ input, sizes }) => {
  const base = path.basename(input, '.png');
  const dir = path.dirname(input);

  sizes.forEach(size => {
    // Create PNG
    sharp(input)
      .resize(size, null)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(`${dir}/${base}-${size}.png`);

    // Create WebP
    sharp(input)
      .resize(size, null)
      .webp({ quality: 80 })
      .toFile(`${dir}/${base}-${size}.webp`);
  });
});
```

## References

- [Google Web.dev - Image Optimization](https://web.dev/fast/#optimize-your-images)
- [WebP Format Documentation](https://developers.google.com/speed/webp)
- [Core Web Vitals](https://web.dev/vitals/)
- [Responsive Images Guide](https://web.dev/responsive-images/)
