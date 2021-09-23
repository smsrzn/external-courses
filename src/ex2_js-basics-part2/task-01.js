function checkType(x) {
  if (typeof x === 'number' && !Number.isNaN(x)) {
    return 'number';
  }

  if (typeof x === 'string') {
    return 'string';
  }

  return undefined;
}

module.exports = checkType;
