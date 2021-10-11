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
  constructor(firstVal, secondVal) {
    if (!isValidValue(firstVal) || !isValidValue(secondVal)) {
      throw new Error('');
    }

    this.firstVal = firstVal;
    this.secondVal = secondVal;
  }

  setX(value) {
    if (!isValidValue(value)) {
      throw new Error('');
    }

    this.firstVal = value;
  }

  setY(value) {
    if (!isValidValue(value)) {
      throw new Error('');
    }

    this.secondVal = value;
  }

  _logSum() {
    console.log(this.firstVal + this.secondVal);
  }

  _logMul() {
    console.log(this.firstVal * this.secondVal);
  }

  _logSub() {
    console.log(this.firstVal - this.secondVal);
  }

  _logDiv() {
    if (this.secondVal === 0) {
      throw new Error('');
    }
    console.log(this.firstVal / this.secondVal);
  }


  logSum = this._logSum.bind(this);
  logMul = this._logMul.bind(this);
  logSub = this._logSub.bind(this);
  logDiv = this._logDiv.bind(this);
}

