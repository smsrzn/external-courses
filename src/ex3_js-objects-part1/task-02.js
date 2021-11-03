function objectOutput(object) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`Key; ${key}, Value: ${object[key]}`);
    }
  }

  return;
}

module.exports = objectOutput;
