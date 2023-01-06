const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addVariant }) {
  addVariant('lang-en', 'html[lang=en] &');
});
