const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities }) {
  matchUtilities({
    size: value => ({
      width: value,
      height: value,
    }),
  });
});
