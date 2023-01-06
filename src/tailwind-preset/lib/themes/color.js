const { range, filter } = require('lodash');

const { cssVar, convertSeriesToObj } = require('./util');

function cssRgb(value) {
  const color = cssVar(`color-${value}`);
  return `rgb(${color})`;
}

const COLOR_SERIES = [
  {
    keys: ['p', 'b'],
    suffix: range(8),
  },
  {
    keys: ['n'],
    suffix: range(1, 11),
  },
  {
    keys: ['g', 'y', 'r'],
    suffix: filter(range(8), i => ![3, 5].includes(i)),
  },
  {
    keys: [
      'primary',
      'blue',
      'green',
      'yellow',
      'red',
      'origin-shadow',
      'popper-bg',
      'button-bg',
      'main-bg',
      'divider',
      'border',
    ],
  },
  {
    keys: ['main', 'secondary', 'help', 'disabled', 'placeholder'],
    suffix: 'text',
  },
].flatMap(source => {
  if (!source.suffix) {
    return source.keys;
  }
  return source.keys.flatMap(key => {
    if (Array.isArray(source.suffix)) {
      return source.suffix.map(r => `${key}-${r}`);
    }
    return `${key}-${source.suffix}`;
  });
});

module.exports = {
  ...convertSeriesToObj(COLOR_SERIES, cssRgb),
  transparent: 'transparent',
  current: 'currentColor',
};
