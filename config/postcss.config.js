const vars = require('postcss-simple-vars');
const reforgePlugins = require('reforge/config/postcss-plugins');

module.exports = [
  vars({ variables: require('../src/common/vars') }),
  ...reforgePlugins
];
