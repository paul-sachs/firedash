require('dotenv').config({ silent: true });

const merge = require('webpack-merge');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const urlJoin = require('url-join');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  build: path.join(process.cwd(), 'build')
};

const common = {
  output: {
    publicPath: urlJoin(process.env.CDN_URL, '/')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        SERVICE_URL: JSON.stringify(process.env.SERVICE_URL)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader?modules!postcss-loader'
      }
    ]
  },
  resolve: {
    root: [path.resolve('.')],
    modulesDirectories: ['node_modules']
  },
  postcss: require('./postcss.config.js')
};

if (TARGET === 'start') {
  module.exports = merge(common, {});
}

if (TARGET === 'build') {
  const config = merge.smart(common, {
    entry: {
      index: 'src/index.js'
    },
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test:   /\.css$/,
          // Extract text needs text not a javascript module, so leave off style-loader
          loader: ExtractTextPlugin.extract('css-loader?modules!postcss-loader')
        }
      ]
    },
    plugins: [
      new ManifestPlugin({ filename: 'manifest.json' }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  });

  if (process.env.NODE_ENV === 'production') {
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({ comments: false }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin()
    ].concat(config.plugins);
  }

  module.exports = config;
}
