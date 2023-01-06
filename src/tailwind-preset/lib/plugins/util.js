function chunkString(str, length = 2) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

function isColorLike(source) {
  return (
    source.startsWith('rgb') ||
    // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/no-unused-capturing-group
    /^((#[\dA-Fa-f]{3,6})|([\w-])+)\s*(?:(\/)\s*)?\d*$/.test(source)
  );
}
function isHexColor(source) {
  return /^#[\dA-Fa-f]{3,6}/.test(source);
}

function resolveHexColor(source) {
  source = source.replace('#', '');
  if (source.length === 3) {
    source = source + source;
  }
  return chunkString(source)
    .map(s => parseInt(s, 16))
    .join(',');
}

function handleColorVar(source) {
  if (!isColorLike(source)) {
    return null;
  }
  // arbitary
  if (source?.startsWith('rgb')) {
    return source;
  }

  const [color, opacity] = source
    // eslint-disable-next-line regexp/no-super-linear-backtracking
    .match(/^(#[\dA-Fa-f]{3,6}|[\w-]+)\s*(?:\/\s*)?(\d*)$/)
    .slice(1);
  // TODO: support custom hex
  const colorString = isHexColor(color)
    ? resolveHexColor(color)
    : `var(--aui-color-${color})`;
  return opacity
    ? `rgba(${colorString}, ${+opacity / 100});`
    : `rgb(${colorString})`;
}

module.exports = {
  handleColorVar,
  isColorLike,
};
