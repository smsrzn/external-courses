function maxValue(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

module.exports = maxValue;
