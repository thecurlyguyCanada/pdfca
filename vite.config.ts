import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite plugin to make CSS non-render-blocking
 * Uses the media="print" technique recommended by Filament Group
 * @see https://www.filamentgroup.com/lab/load-css-simpler/
 */
function asyncCssPlugin(): Plugin {
  return {
    name: 'async-css',
    enforce: 'post',
    transformIndexHtml(html) {
      // Only transform Vite-generated CSS links (in /assets/)
      // Don't touch external CSS or links inside noscript tags
      return html.replace(
        /<link rel="stylesheet"([^>]*) href="(\/assets\/[^"]+\.css)"([^>]*)>/gi,
        (match, before, href, after) => {
          // Skip if already has media attribute
          if (before.includes('media=') || after.includes('media=')) {
            return match;
          }
          // Create async loading link with noscript fallback
          return `<link rel="stylesheet"${before} href="${href}"${after} media="print" onload="this.media='all';this.onload=null;">
<noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      );
    },
  };
}

export default defineConfig({
  // asyncCssPlugin disabled - testing if render-blocking CSS is actually faster
  // with our inline critical CSS already in place
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'esnext',
    // Generate source maps for error tracking but don't expose them publicly
    sourcemap: 'hidden',
    // Improve minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        // Improved chunking strategy for better caching and smaller initial load
        manualChunks: (id) => {
          // React core - rarely changes, good for long-term caching
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          // UI components - lucide icons, dnd-kit, react-rnd
          if (id.includes('lucide-react') || id.includes('@dnd-kit') || id.includes('react-rnd')) {
            return 'vendor-ui';
          }
          // PDF core processing
          if (id.includes('pdf-lib')) {
            return 'vendor-pdf-core';
          }
          // PDF.js for rendering
          if (id.includes('pdfjs-dist')) {
            return 'vendor-pdf-worker';
          }
          // Heavy conversion utilities - only loaded when needed
          if (id.includes('jszip')) {
            return 'vendor-jszip';
          }
          if (id.includes('heic2any')) {
            return 'vendor-heic';
          }
          // Tesseract is very heavy - separate chunk
          if (id.includes('tesseract.js')) {
            return 'vendor-ocr';
          }
          // CBR/CBZ handling
          if (id.includes('unrar-js')) {
            return 'vendor-unrar';
          }
        },
      }
    }
  },
  optimizeDeps: {
    exclude: ['pdfjs-dist'],
  },
});