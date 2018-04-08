const webpack = require('webpack')
const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const CleanWebpackPlugin             = require('clean-webpack-plugin')
const HtmlWebpackPlugin              = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin      = require('html-webpack-harddisk-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const production = !!(require('yargs').argv.p)


module.exports = {
  entry: [
    __dirname + '/src/index.jsx'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle-[hash].js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  resolve: {
    plugins: [
      new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })
    ],
    alias : {
      Component: path.resolve(__dirname, './src/components'),
      Src: path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread', 'react-hot-loader/babel']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|ttf|eot|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:8].[ext]',
            outputPath: './images/'
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, './dist')
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [{ path: 'https://fonts.googleapis.com/css?family=Grand+Hotel', type: 'css' }],
      append: false,
      publicPath: ''
    }),
    new CleanWebpackPlugin('dist', {
      verbose: false,
      root: __dirname
    })
  ]
}
