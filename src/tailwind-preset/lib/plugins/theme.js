const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addVariant }) {
  addVariant('theme-dark', [
    'html[aui-theme-mode=dark] &',
    '@media (prefers-color-scheme: dark) { html[aui-theme-mode=system] & }',
  ]);
});
