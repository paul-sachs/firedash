const vars = require('postcss-simple-vars');
const rucksack = require('rucksack-css');
const lost = require('lost');
const autoprefixer = require('autoprefixer');

module.exports = [
  vars({ variables: require('../src/common/vars') }),
  rucksack,
  lost,
  autoprefixer
];

