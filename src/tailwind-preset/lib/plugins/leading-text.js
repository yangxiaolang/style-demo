const plugin = require('tailwindcss/plugin');

const { cssVar } = require('../themes/util');

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'leading-text': value => ({
        'font-size': cssVar(`font-size-${value}`),
        'line-height': cssVar(`line-height-${value}`),
      }),
    },
    { values: theme('leadingText') },
  );
});
