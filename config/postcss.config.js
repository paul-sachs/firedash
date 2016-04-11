const vars = require('postcss-simple-vars');
const rucksack = require('rucksack-css');
const autoprefixer = require('autoprefixer');

module.exports = [
  vars({ variables: require('../src/common/vars') }),
  rucksack,
  autoprefixer
];
