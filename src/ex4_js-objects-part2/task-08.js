function toLowerCamelCase(string) {
  const stringToLowerCamelCase = string.toLowerCase().split(' ');
  for (let i = 1; i < stringToLowerCamelCase.length; i += 1) {
    stringToLowerCamelCase[i] = stringToLowerCamelCase[i].charAt(0).toUpperCase()
    + stringToLowerCamelCase[i].slice(1);
  }
  return stringToLowerCamelCase.join('');
}
module.exports = toLowerCamelCase;
