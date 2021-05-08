const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.postcss$/,
      use: ['vue-style-loader', 'style-loader', 'css-loader', 'postcss-loader'],
    });
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
