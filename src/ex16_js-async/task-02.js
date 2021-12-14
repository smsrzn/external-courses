const debounce = (fn, ms) => {
  let timeOut;
  return function call() {
    const fnCall = (...args) => {
      fn.apply(this, args);
    };
    clearTimeout(timeOut);
    timeOut = setTimeout(fnCall, ms);
  };
};

let input = () => {
  if (document.querySelector('.label')) {
    document.querySelector('.label').remove();
  }
  const label = document.createElement('label');
  label.className = 'label';
  label.textContent = document.querySelector('.input').value;
  document.getElementById('input').appendChild(label);
};

input = debounce(input, 500);

document.getElementById('input').addEventListener('keyup', input);
