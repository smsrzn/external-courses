function createNewObjectWithoutPrototype() {
  return Object.create(null);
}

module.exports = createNewObjectWithoutPrototype;
