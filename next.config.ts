import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize for production
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Externalize heavy PDF libraries for server components (Next.js 15+)
  // This prevents Edge Runtime issues and improves build performance
  serverExternalPackages: [
    'pdf-lib',
    'pdfjs-dist',
    'jspdf',
    'jszip',
    'docx',
    'mammoth',
    'exceljs',
  ],

  // Headers (security headers moved here from vercel.json)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), magnetometer=(), gyroscope=(), accelerometer=(), ambient-light-sensor=(), autoplay=(), encrypted-media=(), picture-in-picture=(), screen-wake-lock=(), web-share=(), display-capture=(), browsing-topics=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' https://vercel.live https://*.vercel-scripts.com; script-src-elem 'self' 'unsafe-inline' https://vercel.live https://*.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://vercel.live https://*.pusher.com wss://*.pusher.com https://vitals.vercel-insights.com; worker-src 'self' blob:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
        ],
      },
    ];
  },

  // Webpack configuration for PDF.js and heavy libraries
  webpack: (config, { isServer }) => {
    // Handle PDF.js worker
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    // Externalize heavy dependencies in server builds
    if (isServer) {
      config.externals.push('canvas', 'jsdom');
    }

    return config;
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@dnd-kit/core',
      '@dnd-kit/sortable',
      '@dnd-kit/utilities',
    ],
  },

  // Output configuration
  // Remove standalone for Vercel default deployment
  // output: 'standalone',

  // TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
