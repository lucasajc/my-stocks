const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const environmentVariables = require(`../../env/${process.env.NODE_ENV}.json`)

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            }
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      app: path.resolve(__dirname, '../../src/app'),
      common: path.resolve(__dirname, '../../src/common'),
      components: path.resolve(__dirname, '../../src/components'),
      pages: path.resolve(__dirname, '../../src/pages'),
      store: path.resolve(__dirname, '../../src/store'),
      'client-api': path.resolve(__dirname, '../../src/client-api')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(environmentVariables)
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public/assets/**/*.svg'),
          context: path.resolve(__dirname, '../../public/assets/'),
          to: path.resolve(__dirname, '../../dist/assets/')
        },
        {
          from: path.resolve(__dirname, '../../public/assets/**/*.png'),
          context: path.resolve(__dirname, '../../public/assets/'),
          to: path.resolve(__dirname, '../../dist/assets/')
        }
      ]
    })
  ],
  devServer: {
    contentBase: './public',
    host: '0.0.0.0',
    port: 4000,
    compress: true,
    historyApiFallback: true,
    hot: true
  }
}
