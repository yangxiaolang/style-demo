const { cssVar, convertSeriesToObj } = require('./util');

function cssInlineHeight(value) {
  return cssVar(`inline-height-${value}`);
}
const INLINE_HEIGHT = ['l', 'm', 's', 'xs'];

module.exports = convertSeriesToObj(INLINE_HEIGHT, cssInlineHeight);
