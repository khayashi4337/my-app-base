const webpack = require('webpack');
const { merge } = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'development';

module.exports = (env) => merge(commonConfig({ env: ENV }), {
  devtool: 'cheap-module-source-map',
  mode: ENV,
  entry: ['./src/main/webapp/app/index'],
  output: {
    path: utils.root('build/resources/main/static/'),
    filename: 'app/[name].bundle.js',
    chunkFilename: 'app/[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
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
  devServer: {
    hot: true,
    static: {
      directory: './build/resources/main/static/'
    },
    proxy: [
      {
        context: ['/api', '/services', '/management', '/swagger-resources', '/v2/api-docs', '/h2-console', '/auth'],
        target: `http${env && env.tls ? 's' : ''}://localhost:8080`,
        secure: false,
        changeOrigin: env && env.tls
      },
      {
        context: ['/websocket'],
        target: 'ws://127.0.0.1:8080',
        ws: true
      }
    ],
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  },
  stats: process.env.JHI_DISABLE_WEBPACK_LOGS ? 'none' : (env && env.stats) || 'minimal',
  plugins: [
    new BrowserSyncPlugin(
      {
        https: env && env.tls,
        host: 'localhost',
        port: 9000,
        proxy: {
          target: `http${env && env.tls ? 's' : ''}://localhost:9060`,
          ws: true,
          proxyOptions: {
            changeOrigin: false
          }
        },
        socket: {
          clients: {
            heartbeatTimeout: 60000
          }
        }
      },
      {
        reload: false
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({
      title: 'JHipster',
      contentImage: path.join(__dirname, 'applicot_logo.png')
    })
  ]
});
