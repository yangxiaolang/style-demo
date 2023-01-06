const plugin = require('tailwindcss/plugin');

const { handleColorVar, isColorLike } = require('./util');

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'box-shadow': value => {
        if (isColorLike(value)) {
          const color = handleColorVar(value);
          return {
            '--tw-box-shadow-color': color,
          };
        }
        return {
          '--tw-box-shadow-base': value,
          'box-shadow': 'var(--tw-box-shadow-base) var(--tw-box-shadow-color)',
        };
      },
    },
    { values: theme('textColor') },
  );
});
