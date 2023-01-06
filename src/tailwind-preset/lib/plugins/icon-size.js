const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      icon: value => ({
        'font-size': value,
      }),
    },
    { values: theme('iconSize') },
  );
});
