const checkOverflow = (length, maxElements) => {
  if (length === maxElements) {
    throw new Error('');
  }
};

const checkValidity = (value) => {
  if (!Number.isInteger(value) || value === 0) {
    throw new Error('');
  }
};

function isIterable(obj) {
  if (obj === null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

const countElements = (entity) => {
  let counter = 0;
  for (elem of entity) {
    counter++;
  }
  return counter;
};

class Node {
  constructor(value) {
    this.value = value;
  }
}

const toArray = function (callback) {
  let arr = [];
  for (let element of this) {
    arr.push(callback(element));
  }
  return arr;
};

class Stack {
  constructor(maxElements = 10) {
    checkValidity(maxElements);
    this.maxElements = maxElements;
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(elem) {
    checkOverflow(this.length, this.maxElements);

    this.length++;
    const node = new Node(elem);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    const prev = this.tail;
    this.tail = node;
    this.tail.prev = prev;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('');
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.tail.value;
  }

  isEmpty() {
    return !Boolean(this.length);
  }

  toArray() {
    return this.getArray((elem) => {
      return elem.value;
    });
  }

  static fromIterable(entity) {
    if (!isIterable(entity)) {
      throw new Error('');
    }

    const stack = new Stack(countElements(entity));

    for (let element of entity) {
      stack.push(element);
    }

    return stack;
  }

  [Symbol.iterator]() {
    this.current = this.head;
    return {
      next: () => {
        if (this.current !== null) {
          const result = { done: false, value: this.current };
          this.current = this.current.next || null;
          return result;
        }

        return { done: true };
      },
    };
  }
}

Stack.prototype.getArray = toArray;
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(elem) {
    const node = new Node(elem);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    const prev = this.tail;
    this.tail = node;
    this.tail.prev = prev;
  }

  prepend(elem) {
    const node = new Node(elem);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.head.prev = node;
    const next = this.head;
    this.head = node;
    this.head.next = next;
  }

  find(elem) {
    for (let element of this) {
      if (element.value === elem) {
        return element.value;
      }
    }
    return null;
  }

  toArray() {
    return this.getArray((elem) => {
      return elem.value;
    });
  }

  static fromIterable(entity) {
    if (!isIterable(entity)) {
      throw new Error('');
    }

    const newList = new LinkedList(countElements(entity));

    for (elem of entity) {
      newList.append(elem);
    }

    return newList;
  }

  [Symbol.iterator]() {
    this.current = this.head;
    return {
      next: () => {
        if (this.current !== null) {
          const result = { done: false, value: this.current };
          this.current = this.current.next || null;
          return result;
        }

        return { done: true };
      },
    };
  }
}

LinkedList.prototype.getArray = toArray;
