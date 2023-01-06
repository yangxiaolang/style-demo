const { cssVar, convertSeriesToObj } = require('./util');

function cssFontWeight(value) {
  return cssVar(`font-weight-${value}`);
}
const FONT_WEIGHT = ['bold', 'normal'];

module.exports = convertSeriesToObj(FONT_WEIGHT, cssFontWeight);
