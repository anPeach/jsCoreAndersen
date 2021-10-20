import { sum, sub, mul, div } from './utils.js';

const input = document.querySelector('.calculator__screen');

const setInfo = (operation) => {
  info.operation = operation;
  info.first = input.value;
  input.value = '';
};

const info = {
  operation: null,
  first: null,
  current: null,
  result: null,
};

const operationsTypes = {
  sum: () => {
    setInfo(sum);
  },
  mul: () => {
    setInfo(mul);
  },
  sub: () => {
    setInfo(sub);
  },
  div: () => {
    setInfo(div);
  },
  switchSign: () => {
    if (input.value === 'Error') {
      input.value = '';
    }

    input.value *= -1;
    info.current = input.value;
  },
  equal: () => {
    info.result = info.operation(Number(info.first), Number(info.current));
    input.value = info.result;
    info.first = info.result;
  },
};

const buttonsTypes = {
  number: (target) => {
    if (info.result !== null) {
      info.result = null;
      input.value = '';
    }

    if (input.value === 'Error') {
      input.value = '';
    }

    input.value += target.value;
    info.current = input.value;
  },
  mathOperation: (target) => {
    operationsTypes[target.dataset.mathOperation]();
  },
  clear: () => {
    input.value = '';
    info.operation = null;
    info.current = null;
    info.first = null;
    info.result = null;
  },
  dot: () => {
    input.value += '.';
  },
  clearOneSign: () => {
    if (info.operation !== null && info.result === Number(input.value)) {
      return;
    }

    input.value = input.value.slice(0, -1);
  },
};

export { buttonsTypes };
