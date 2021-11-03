function toLowerCamelCase(string) {
  const result = string.toLowerCase().split(' ');

  for (let i = 1; i < result.length; i += 1) {
    result[i] = result[i].charAt(0).toUpperCase()
    + result[i].slice(1);
  }

  return result.join('');
}

module.exports = toLowerCamelCase;
