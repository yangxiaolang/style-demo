const { cssVar, convertSeriesToObj } = require('./util');

function cssIconSize(value) {
  return cssVar(`icon-size-${value}`);
}
const ICON_SIZE = ['xxl', 'xl', 'l', 'm', 's'];

module.exports = convertSeriesToObj(ICON_SIZE, cssIconSize);
