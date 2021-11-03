function createAnalogSlice(array, begin = 0, end = array.length) {
  const newArray = [];
  let localBegin;
  let localEnd;

  if (end < 0) {
    localEnd = array.length + end;
  } else {
    localEnd = end;
  }

  if (begin < 0) {
    localBegin = array.length + begin;
  } else {
    localBegin = begin;
  }

  for (let i = localBegin; i < localEnd; i += 1) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = createAnalogSlice;
