const path = require('path');

let config = {
  mode: 'production',
  entry: path.resolve('./src/pcit.min.ts'),
  output: {
    filename: 'pcit.min.js',
  },
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
