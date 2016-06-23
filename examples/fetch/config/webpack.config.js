require('dotenv').config({ silent: true });
const reforgeConfig = require('reforge/config/webpack.config');
const merge = require('webpack-merge');

const common = {
  postcss: require('./postcss.config.js')
};

module.exports = merge.smart(reforgeConfig, common);
