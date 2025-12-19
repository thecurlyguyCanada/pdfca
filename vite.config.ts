import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
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