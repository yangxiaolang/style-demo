const { range } = require('lodash');

const { cssVar, convertSeriesToObj } = require('./util');

function cssSpacing(value) {
  return cssVar(`spacing-${value}`);
}
const SPACING = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl'];
const PRIMITIVES = range(20).reduce(
  (acc, curr) => ({ ...acc, [2 * curr]: 2 * curr + 'px' }),
  {},
);
module.exports = { ...convertSeriesToObj(SPACING, cssSpacing), ...PRIMITIVES };
