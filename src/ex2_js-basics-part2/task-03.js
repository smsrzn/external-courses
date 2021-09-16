function checkNumberOfArray(array) {
  let even = 0;
  let odd = 0;
  let zero = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'number') {
      if (array[i] === 0) {
        zero += 1;
      } else if (array[i] % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
  }
  return [even, odd, zero];
}
module.exports = checkNumberOfArray;
