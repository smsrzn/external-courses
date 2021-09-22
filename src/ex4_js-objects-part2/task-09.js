function addSubstringInString(string, substring, index) {
  const stringToArray = string.split(' ');
  stringToArray[index] += ` ${substring}`;
  return stringToArray.join(' ');
}
module.exports = addSubstringInString;
