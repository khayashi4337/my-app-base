const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'production';

module.exports = merge(commonConfig({ env: ENV }), {
  mode: ENV,
  entry: {
    main: './src/main/webapp/app/index'
  },
  output: {
    path: utils.root('build/resources/main/static/'),
    filename: 'app/[name].[contenthash].bundle.js',
    chunkFilename: 'app/[name].[contenthash].chunk.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths: ['node_modules']
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 2015,
          toplevel: true,
          module: true,
          compress: {
            ecma: 2015,
            module: true,
            toplevel: true
          },
          output: {
            comments: false,
            ecma: 2015
          },
          mangle: {
            keep_fnames: true,
            module: true,
            toplevel: true
          }
        }
      }),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'content/[name].[contenthash].css',
      chunkFilename: 'content/[name].[contenthash].css'
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['en', 'ja', 'th']
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/swagger-ui/]
    })
  ]
});
