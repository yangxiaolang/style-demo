function cssVar(value) {
  return `var(--aui-${value})`;
}

function convertSeriesToObj(series, convertFn, keyWrapper) {
  return series.reduce((acc, curr) => {
    const key = keyWrapper ? keyWrapper(curr) : curr;
    const value = convertFn(curr);
    acc[key] = value;
    return acc;
  }, {});
}

module.exports = {
  cssVar,
  convertSeriesToObj,
};
