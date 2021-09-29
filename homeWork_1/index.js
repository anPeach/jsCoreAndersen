const ERR_MESSAGE = 'Некорректный ввод!';

const isZero = (value) => {
  return Number(value) === 0;
};

const isValid = (value) => {
  if (value.trim() === '') {
    throw TypeError(ERR_MESSAGE);
  }

  if (!Number.isInteger(Number(value))) {
    throw TypeError(ERR_MESSAGE);
  }
};

function valueInNotation() {
  try {
    const value = prompt('Enter value: ');
    isValid(value);

    const notation = prompt('Enter notation from 2 to 32: ');
    isValid(notation);
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
