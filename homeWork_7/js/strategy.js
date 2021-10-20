import {
  canClearInput,
  canOperate,
  canSwitchOperation,
  div,
  getResult,
  isPrevResult,
  mul,
  setOptions,
  sub,
  sum,
} from './utils.js';

const input = document.querySelector('.calculator__screen');

const enteredValues = [];
const lastEnteredValue = {
  entered: false,
};

const setInfo = (operation) => {
  if (enteredValues[length - 1] === operation) {
    return;
  }
  if (enteredValues.length !== 1) {
    enteredValues.push(Number(input.value));
  }
  enteredValues.push(operation);
  input.value = getResult(enteredValues);
  lastEnteredValue.entered = false;
};

const operationsTypes = {
  operation: null,
  lastValue: null,
  sum: () => {
    if (canSwitchOperation(enteredValues, sum) && !lastEnteredValue.entered) {
      enteredValues[enteredValues.length - 1] = sum;
      return;
    }

    if (!canOperate(enteredValues, lastEnteredValue.entered)) {
      return;
    }
    setInfo(sum);
  },
  mul: () => {
    if (canSwitchOperation(enteredValues, mul) && !lastEnteredValue.entered) {
      enteredValues[enteredValues.length - 1] = mul;
      return;
    }

    if (!canOperate(enteredValues, lastEnteredValue.entered)) {
      return;
    }

    setInfo(mul);
  },
  sub: () => {
    if (canSwitchOperation(enteredValues, sub) && !lastEnteredValue.entered) {
      enteredValues[enteredValues.length - 1] = sub;
      return;
    }

    if (!canOperate(enteredValues, lastEnteredValue.entered)) {
      return;
    }

    setInfo(sub);
  },
  div: () => {
    if (canSwitchOperation(enteredValues, div) && !lastEnteredValue.entered) {
      enteredValues[enteredValues.length - 1] = div;
      return;
    }

    if (!canOperate(enteredValues, lastEnteredValue.entered)) {
      return;
    }

    setInfo(div);
  },
  switchSign: () => {
    if (input.value === 'Error') {
      input.value = '';
    }

    input.value *= -1;

    if (isPrevResult(enteredValues)) {
      enteredValues.length = 0;
      enteredValues.push(Number(input.value));
    }
  },
  equal: function () {
    setOptions(enteredValues, this, Number(input.value));

    const result = getResult(enteredValues);

    enteredValues.length = 0;
    enteredValues.push(result);
    input.value = result;
    lastEnteredValue.entered = false;
  },
};

const buttonsTypes = {
  number: (target) => {
    if (canClearInput(enteredValues, input.value, lastEnteredValue.entered)) {
      input.value = '';
    }

    if (isPrevResult(enteredValues)) {
      enteredValues.length = 0;
    }

    input.value += target.value;
    lastEnteredValue.entered = true;
  },
  mathOperation: (target) => {
    operationsTypes[target.dataset.mathOperation]();
  },
  clear: () => {
    input.value = '';
    enteredValues.length = 0;
  },
  dot: () => {
    input.value += '.';
  },
  clearOneSign: () => {
    if (isPrevResult(enteredValues)) {
      return;
    }

    input.value = input.value.slice(0, -1);
  },
};

export { buttonsTypes };
