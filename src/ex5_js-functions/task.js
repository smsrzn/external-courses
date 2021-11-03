function Calculator() {
  let currentResult = 0;

  function add(value = 0) {
    currentResult += value;
    return add;
  }

  function subtract(value = 0) {
    currentResult -= value;
    return subtract;
  }

  function divide(value = 1) {
    currentResult /= value;
    return divide;
  }

  function multiply(value = 1) {
    currentResult *= value;
    return multiply;
  }

  function getResult() {
    return currentResult;
  }

  function reset() {
    currentResult = 0;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
}

const calculator = new Calculator();

module.exports = calculator;
