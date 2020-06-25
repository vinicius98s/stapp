/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.tsx')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
  },
  devtool: false,
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@common': path.resolve(__dirname, '..', 'common'),
      '@components': path.resolve(__dirname, 'src', 'components'),
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
      }),
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
};
