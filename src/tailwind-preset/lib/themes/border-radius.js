const { cssVar, convertSeriesToObj } = require('./util');

function cssRadius(value) {
  return cssVar(`border-radius-${value}`);
}
const RADIUS = ['l', 'm'];

module.exports = convertSeriesToObj(RADIUS, cssRadius);
