function createAnalogReduce(array, callback, initialValue) {
  let beginArray = 0;
  let previousValue;

  if (initialValue === undefined) {
    previousValue = array[0];
    beginArray = 1;
  } else {
    previousValue = initialValue;
  }

  for (let i = beginArray; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = createAnalogReduce;
