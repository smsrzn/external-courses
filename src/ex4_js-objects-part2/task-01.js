function prototypeProperty(property, object) {
  if (object.__proto__.hasOwnProperty(property)) {
    return object[property];
  }

  return undefined;
}

module.exports = prototypeProperty;
