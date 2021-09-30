const ERR_MESSAGE = 'Некорректный ввод!';
const RANGE_ERR_MESSAGE = 'Значение не в диапазоне от 2 до 36';

const isZero = (value) => Number(value) === 0;

const isValid = (value) => {
  if (value.trim() === '') {
    throw TypeError(ERR_MESSAGE);
  }

  const numerateValue = Number(value);

  if (!numerateValue) {
    throw TypeError(ERR_MESSAGE);
  }

  if (!Number.isInteger(Math.round(numerateValue))) {
    throw TypeError(ERR_MESSAGE);
  }
};

const isInRange = (value) => {
  if (value < 2 || value > 36) {
    throw RangeError(RANGE_ERR_MESSAGE);
  }
};

function valueInNotation() {
  try {
    const value = prompt('Enter value: ');
    isValid(value);

    const notation = prompt('Enter notation from 2 to 36: ');
    isValid(notation);
    isInRange(notation);
    if (isZero(notation)) {
      throw TypeError(ERR_MESSAGE);
    }

    return Number(value).toString(Number(notation));
  } catch (err) {
    console.log(err.message);
  }
}

function sumAndQuotient() {
  try {
    const firstValue = prompt('Enter first value: ');
    isValid(firstValue);

    const secondValue = prompt('Enter second value: ');
    isValid(secondValue);
    if (isZero(secondValue)) {
      throw TypeError(ERR_MESSAGE);
    }

    return `Result: ${Number(firstValue) + Number(secondValue)}, ${firstValue / secondValue}.`;
  } catch (err) {
    console.log(err.message);
  }
}
