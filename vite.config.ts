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
  plugins: [react(), asyncCssPlugin()],
  build: {
    outDir: 'dist',
    target: 'esnext',
    // Generate source maps for error tracking but don't expose them publicly
    sourcemap: 'hidden',
    // Performance Optimization: Safe minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 1, // Safe single-pass minification
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // 2026 Enhancement: Better chunking and tree-shaking
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    // Reduce chunk size for faster initial load
    chunkSizeWarningLimit: 500, // Warn if chunks exceed 500KB
    // 2026 Performance: Enable CSS code splitting
    cssCodeSplit: true,
    // Enable module preload polyfill for better browser support
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        // 2026 Optimization: Aggressive code splitting for minimal initial bundle
        manualChunks: (id) => {
          // React core - rarely changes, good for long-term caching
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // React Router - separate chunk for routing
          if (id.includes('react-router')) {
            return 'vendor-router';
          }
          // UI components - lucide icons, dnd-kit, react-rnd
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('@dnd-kit')) {
            return 'vendor-dnd';
          }
          if (id.includes('react-rnd')) {
            return 'vendor-rnd';
          }
          // React Helmet for SEO - separate chunk
          if (id.includes('react-helmet')) {
            return 'vendor-helmet';
          }
          // PDF core processing - critical
          if (id.includes('pdf-lib')) {
            return 'vendor-pdf-core';
          }
          // PDF.js for rendering - large, separate
          if (id.includes('pdfjs-dist')) {
            return 'vendor-pdf-worker';
          }
          // Heavy conversion utilities - lazy load these
          if (id.includes('jszip')) {
            return 'vendor-jszip';
          }
          if (id.includes('heic2any')) {
            return 'vendor-heic';
          }
          if (id.includes('mammoth') || id.includes('docx')) {
            return 'vendor-docx';
          }
          if (id.includes('xlsx')) {
            return 'vendor-xlsx';
          }
          // Tesseract is very heavy - separate chunk, lazy load
          if (id.includes('tesseract.js')) {
            return 'vendor-ocr';
          }
          // CBR/CBZ handling - lazy load
          if (id.includes('unrar-js')) {
            return 'vendor-unrar';
          }
          // jsPDF for generation - lazy load
          if (id.includes('jspdf')) {
            return 'vendor-jspdf';
          }
          // Analytics - non-critical, lazy load
          if (id.includes('@vercel/analytics')) {
            return 'vendor-analytics';
          }
          // IndexedDB - idb-keyval
          if (id.includes('idb-keyval')) {
            return 'vendor-idb';
          }
        },
        // 2026 Enhancement: Optimized file naming for better caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Compact output for smaller files
        compact: true,
        // 2026 Performance: Optimize imports
        generatedCode: {
          constBindings: true, // Use const for bindings
        },
      },
      // Safe tree-shaking
      treeshake: true,
    }
  },
  // 2026 Performance: Optimized dependency pre-bundling
  optimizeDeps: {
    exclude: ['pdfjs-dist'], // Don't pre-bundle PDF.js worker
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
    ],
    // Enable esbuild for faster dev server
    esbuildOptions: {
      target: 'esnext',
    },
  },
  // 2026 Enhancement: Performance hints
  preview: {
    port: 3000,
  },
  // Enable compression
  server: {
    headers: {
      'Cache-Control': 'no-cache',
    },
  },
});