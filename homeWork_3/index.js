Array.prototype.myFilter = function (callback, thisArg) {
  return this.reduce((acc, item, index, array) => {
    if (callback.call(thisArg, item, index, array)) {
      acc.push(item);
    }

    return acc;
  }, []);
};

Array.prototype.myFilter_2 = function (callback, thisArg) {
  const resultArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      resultArray.push(this[i]);
    }
  }

  return resultArray;
};

const createDebounceFunction = (callback, timeout) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, args), timeout);
  };
};
