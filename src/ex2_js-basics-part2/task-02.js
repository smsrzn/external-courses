function outputOfArrayElements(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }

  console.log(`The number of elements in the array is ${array.length}`);
  return;
}

module.exports = outputOfArrayElements;
