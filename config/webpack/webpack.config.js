const webpack  = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
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
