//deep clone

const isObject = (obj) => obj instanceof Object;

const types = {
  array: () => {
    return [];
  },
  object: () => {
    return {};
  },
};

const getType = (obj) => {
  if (Array.isArray(obj)) {
    return 'array';
  }

  return 'object';
};

const makeObjectDeepCopy = (obj) => {
  if (!isObject(obj)) {
    return obj;
  }

  const type = getType(obj);
  const copyObj = types[type]();

  for (const prop in obj) {
    if (!isObject(obj[prop])) {
      copyObj[prop] = obj[prop];
    } else {
      copyObj[prop] = makeObjectDeepCopy(obj[prop]);
    }
  }

  return copyObj;
};

//select from interval

const checkValidity = (num) => {
  if (typeof num !== 'number') {
    throw Error('Invalid value');
  }
  if (!Number.isInteger(Math.round(num))) {
    throw Error('Invalid value');
  }
};

const checkArrayValidity = (arr) => {
  if (!Array.isArray(arr)) {
    throw Error("It's not array");
  }

  arr.forEach((num) => {
    checkValidity(num);
  });
};

const getValues = (arr, from, to) => {
  return arr.filter((value) => {
    if (value <= to && value >= from) {
      return true;
    }
  });
};

const selectFromInterval = (arr, from, to) => {
  try {
    checkArrayValidity(arr);
    checkValidity(from);
    checkValidity(to);

    if (from > to) {
      return getValues(arr, to, from);
    }

    return getValues(arr, from, to);
  } catch (err) {
    console.log(err.message);
  }
};

//iterable class

const checkIsLess = (from, to) => {
    if(from > to) {
        throw Error('Invalid value');
    }
}

let myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]() {
    checkValidity(this.from);
    checkValidity(this.to);
    checkIsLess(this.from, this.to);

    this.current = this.from;
    return {
      next: () => {
        if (this.current <= this.to) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};
