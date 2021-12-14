function Calculator() {
  this.value = 0;

  this.getResult = function getResult() {
    return this.value;
  };

  this.reset = function reset() {
    this.value = 0;

    return this;
  };

  this.add = function add(value = 0) {
    this.value += value;

    return this;
  };

  this.subtract = function subtract(value = 0) {
    this.value -= value;

    return this;
  };

  this.divide = function divide(value = 1) {
    this.value /= value;

    return this;
  };

  this.multiply = function multiply(value = 1) {
    this.value *= value;

    return this;
  };

  this.setState = function setState(state = 0) {
    this.value = state;

    return this;
  };

  this.fetchData = function fetchData(callback) {
    callback(500);

    return this;
  };
}

const calculator = new Calculator();

module.exports = calculator;
