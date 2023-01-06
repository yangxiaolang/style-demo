const { cssVar, convertSeriesToObj } = require('./util');

function cssLineHeight(value) {
  return cssVar(`line-height-${value}`);
}
const LINE_HEIGHT = ['s', 'm', 'l', 'xl', 'xxl', 'xxxl'];

module.exports = {
  ...convertSeriesToObj(LINE_HEIGHT, cssLineHeight),
  none: 1,
};
