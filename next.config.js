/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core React settings
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: [],
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Production build optimizations
  productionBrowserSourceMaps: false,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Performance optimizations
  optimizeFonts: true,
  staticPageGenerationTimeout: 120,
  
  // TypeScript strict mode
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  
  // Webpack optimization for production
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              filename: 'chunks/vendor.js',
              test: /node_modules/,
              name: 'vendor',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
