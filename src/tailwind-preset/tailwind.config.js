const lineClamp = require('@tailwindcss/line-clamp');

const plugins = require('./lib/plugins');
const THEMES = require('./lib/themes');

module.exports = {
  prefix: 'tw-',
  theme: THEMES,
  plugins: [...plugins, lineClamp],
};
