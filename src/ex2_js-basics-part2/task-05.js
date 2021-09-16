function maxValue(array) {
  let max;
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      max = array[i];
    } else {
      max = array[i + 1];
    }
  }
  return max;
}
module.exports = maxValue;
