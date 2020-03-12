module.exports = {
  stories: ['../stories/**/*.stories.tsx', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions/register', '@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    // Support Typescript.
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    });

    // Support Sass.
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    // Extensions.
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
