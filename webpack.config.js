const path = require('path');

let config = {
  mode: 'production',
  entry: path.resolve('./src/index.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

module.exports = (env, argv) => {
  return config;
};
