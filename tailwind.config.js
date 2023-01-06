
const lineClamp = require('@tailwindcss/line-clamp');

const plugins = require('./src/tailwind-preset/lib/plugins');
const THEMES = require('./src/tailwind-preset/lib/themes');

module.exports = {
  content: ["./src/**/*.{html,ts}",],
  prefix: 'tw-',
  theme: THEMES,
  plugins: [...plugins, lineClamp],
};
