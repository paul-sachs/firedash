const vars = require('postcss-simple-vars');
const reforgePlugins = require('reforge/config/postcss-plugins');
const partialImport = require('postcss-partial-import');

module.exports = [
  partialImport,
  vars({ variables: require('../src/common/vars') })
].concat(reforgePlugins);
