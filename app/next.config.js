require('dotenv').config();
const withOptimizedImages = require('next-optimized-images');
const withSourceMaps = require('@zeit/next-source-maps')();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

const baseConfig = {
  inlineImageLimit: -1,
  target: 'serverless',
  env: {
    customKey: 'my-value',
  },
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },
  webpack(config, {buildId, dev, isServer, defaultLoaders, webpack}) {
    const splitChunks = config.optimization && config.optimization.splitChunks;
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups;

      const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider|redux|react-redux|redux-persist|next-redux-wrapper|styled-components|@emotion)[\\/]/;
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
          test: preactModules,
        });
      } else {
        cacheGroups.preact = {
          name: 'commons',
          chunks: 'all',
          test: preactModules,
        };
      }
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      react: 'preact/compat',
      react$: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom$': 'preact/compat',
    };

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            '@babel/plugin-transform-destructuring',
            '@babel/plugin-transform-block-scoping',
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-template-literals',
            '@babel/plugin-transform-computed-properties',
            '@babel/plugin-transform-shorthand-properties',
            '@babel/plugin-proposal-throw-expressions',
            '@babel/plugin-transform-spread',
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-transform-parameters',
          ],
        },
      },
    });

    return config;
  },
};

const nextConfig =
  process.env.SOURCEMAP === 'true'
    ? withSourceMaps(withBundleAnalyzer(withOptimizedImages(baseConfig)))
    : withBundleAnalyzer(withOptimizedImages(baseConfig));

module.exports = nextConfig;
