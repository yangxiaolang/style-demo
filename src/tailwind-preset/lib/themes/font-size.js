const { cssVar, convertSeriesToObj } = require('./util');

function cssFontSize(value) {
  return cssVar(`font-size-${value}`);
}

const FONT_SIZES = ['s', 'm', 'l', 'xl', 'xxl'];

module.exports = convertSeriesToObj(FONT_SIZES, cssFontSize);
