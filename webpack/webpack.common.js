const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const utils = require('./utils.js');

const getTsLoaderRule = env => {
  const rules = [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        happyPackMode: true
      }
    }
  ];
  if (env === 'development') {
    rules.unshift({
      loader: 'react-hot-loader/webpack'
    });
  }
  return rules;
};

module.exports = options => ({
  cache: {
    type: options.env === 'production' ? 'filesystem' : 'memory'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: ['node_modules'],
    alias: utils.mapTypescriptAliasToWebpackAlias(),
    fallback: {
      path: false,
      fs: false,
      crypto: false
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: getTsLoaderRule(options.env),
        include: [utils.root('./src/main/webapp/app')],
        exclude: [utils.root('node_modules')]
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'content/[hash][ext]'
        }
      }
    ]
  },
  stats: {
    children: false
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'${options.env}'`,
        BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
        VERSION: `'${process.env.hasOwnProperty('APP_VERSION') ? process.env.APP_VERSION : 'DEV'}'`,
        DEBUG_INFO_ENABLED: options.env === 'development',
        SERVER_API_URL: `''`
      }
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: ['node_modules']
    }),
    // Type checking disabled due to React 16 + newer TypeScript incompatibility
    // Uncomment after upgrading React to 18
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     configFile: utils.root('tsconfig.build.json')
    //   }
    // }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './node_modules/swagger-ui-dist/', to: 'swagger-ui', globOptions: { ignore: ['**/index.html'] }, filter: (filepath) => filepath.match(/\.(js|css|html|png)$/) },
        { from: './node_modules/axios/dist/axios.min.js', to: 'swagger-ui' },
        { from: './src/main/webapp/swagger-ui/', to: 'swagger-ui' },
        { from: './src/main/webapp/content/', to: 'content' },
        { from: './src/main/webapp/favicon.ico', to: 'favicon.ico' },
        { from: './src/main/webapp/manifest.webapp', to: 'manifest.webapp' },
        { from: './src/main/webapp/robots.txt', to: 'robots.txt' }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/main/webapp/index.html',
      inject: 'body',
      base: '/'
    }),
    new MergeJsonWebpackPlugin({
      output: {
        groupBy: [
          { pattern: './src/main/webapp/i18n/en/*.json', fileName: './i18n/en.json' },
          { pattern: './src/main/webapp/i18n/ja/*.json', fileName: './i18n/ja.json' },
          { pattern: './src/main/webapp/i18n/th/*.json', fileName: './i18n/th.json' }
        ]
      }
    })
  ]
});
