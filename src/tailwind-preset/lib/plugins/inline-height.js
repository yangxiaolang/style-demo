const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'inline-h': value => ({
        height: value,
      }),
    },
    { values: theme('inlineHeight') },
  );
});
