const roundToEight = (value) => Math.round(value * 100000000) / 100000000;

const lastIsOperation = (arr) => typeof arr[arr.length - 1] === 'function' && arr.length > 0;

const sum = (firstVal, secondVal) => roundToEight(firstVal + secondVal);
const mul = (firstVal, secondVal) => roundToEight(firstVal * secondVal);
const sub = (firstVal, secondVal) => roundToEight(firstVal - secondVal);
const div = (firstVal, secondVal) => {
  if (secondVal === 0) {
    throw new Error('attempt to divide by 0');
  }

  return roundToEight(firstVal / secondVal);
};

const getResult = (arr) => {
  return arr.reduce((acc, item, index) => {
    if (index === 0) {
      acc = item;
      return acc;
    }
    if (typeof item === 'number') {
      acc = arr[index - 1](acc, Number(item));
    }

    return acc;
  }, 0);
};

const canOperate = (arr, entered) => !(lastIsOperation(arr) && entered === false);

const isPrevResult = (arr) => arr.length === 1;

const setOptions = (arr, options, value) => {
  if (isPrevResult(arr)) {
    arr.push(options.operation);
    arr.push(options.lastValue);
    return;
  }
  options.operation = arr[arr.length - 1];
  options.lastValue = value;
  arr.push(value);
};

const canClearInput = (arr, value, entered) => {
  const lastElem = arr[arr.length - 1];

  if (value === 'Error') {
    return true;
  }

  if ((typeof lastElem !== 'number' || arr.length === 1) && entered === false) {
    return true;
  }

  return false;
};

const canSwitchOperation = (arr, func) => arr[arr.length - 1] !== func && arr.length > 1;

export {
  canClearInput,
  canOperate,
  canSwitchOperation,
  div,
  getResult,
  isPrevResult,
  lastIsOperation,
  mul,
  setOptions,
  sub,
  sum,
};
