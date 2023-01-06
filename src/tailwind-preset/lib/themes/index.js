const RADIUS = require('./border-radius');
const COLORS = require('./color');
const FONT_SIZES = require('./font-size');
const FONT_WEIGHT = require('./font-weight');
const ICON_SIZE = require('./icon-size');
const INLINE_HEIGHT = require('./inline-height');
const LEADING_TEXT = require('./leading-text');
const LINE_HEIGHT = require('./line-height');
const SCREENS = require('./screens');
const SPACING = require('./spacing');

module.exports = {
  colors: COLORS,
  fontSize: FONT_SIZES,
  margin: SPACING,
  padding: SPACING,
  fontWeight: FONT_WEIGHT,
  lineHeight: LINE_HEIGHT,
  iconSize: ICON_SIZE,
  inlineHeight: INLINE_HEIGHT,
  borderRadius: RADIUS,
  leadingText: LEADING_TEXT,
  screens: SCREENS,
};
