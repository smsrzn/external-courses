function Calculator() {
  let currentResult = 0;
  function add(value) {
    if (typeof value === 'number') {
      currentResult += value;
    }
    return add;
  }
  function subtract(value) {
    if (typeof value === 'number') {
      currentResult -= value;
    }
    return subtract;
  }
  function divide(value) {
    if (typeof value === 'number') {
      currentResult /= value;
    }
    return divide;
  }
  function multiply(value) {
    if (typeof value === 'number') {
      currentResult *= value;
    }
    return multiply;
  }
  function getResult() {
    return currentResult;
  }
  function reset() {
    currentResult = 0;
  }
  return {
    add, subtract, divide, multiply, getResult, reset,
  };
}
const calculator = new Calculator();
module.exports = calculator;
