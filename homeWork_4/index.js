const isString = (str) => {
  if (typeof str !== 'string') {
    return false;
  }

  return true;
};

const concatStrings = (arg, separator = '') => {
  let str = arg;
  const separ = isString(separator) ? separator : '';

  return function fn(arg) {
    if (!isString(arg)) {
      return str;
    }

    str += separ + arg;
    return fn;
  };
};

const isValidValue = (value) => {
  if (typeof value === 'bigint' || !Number.isInteger(Math.round(value))) {
    return false;
  }

  return true;
};

class Calculator {
  static firstVal;
  static secondVal;
  constructor(firstVal, secondVal) {
    if (!isValidValue(firstVal) || !isValidValue(secondVal)) {
      throw new Error('');
    }

    Calculator.firstVal = firstVal;
    Calculator.secondVal = secondVal;
  }

  setX(value) {
    if (!isValidValue(value)) {
      throw new Error('');
    }

    Calculator.firstVal = value;
  }

  setY(value) {
    if (!isValidValue(value)) {
      throw new Error('');
    }

    Calculator.secondVal = value;
  }

  logSum() {
    console.log(Calculator.firstVal + Calculator.secondVal);
  }

  logMul() {
    console.log(Calculator.firstVal * Calculator.secondVal);
  }

  logSub() {
    console.log(Calculator.firstVal - Calculator.secondVal);
  }

  logDiv() {
    if (Calculator.secondVal === 0) {
      throw new Error('');
    }
    console.log(Calculator.firstVal / Calculator.secondVal);
  }
}
