function checkIdenticalItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[j] !== array[i]) {
        return false;
      }
    }
  }
  return true;
}
module.exports = checkIdenticalItems;
