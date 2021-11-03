function getCountingСharacters(string) {
  const object = {};

  for (let i = 0; i < string.length; i += 1) {
    if (object.hasOwnProperty(string[i])) {
      object[string[i]] += 1;
    } else {
      object[string[i]] = 1;
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`Number ${key} count ${object[key]}`);
    }
  }

  return undefined;
}

module.exports = getCountingСharacters;
