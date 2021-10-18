const isValidStringLength = (str) => str.length >= 1 && str.length <= 50;

const isValidYear = (year) => year >= 1900 && year <= new Date().getFullYear();

const isValidSpeed = (speed) => speed >= 100 && speed <= 300;

const isValidMaxFuelVolume = (value) => value >= 5 && value <= 20;

const isValidValue = (value) => Number.isInteger(Math.round(value)) && !value < 1;

const getSpentFuel = (fuelConsumption, speed, hours) => (fuelConsumption / 100) * speed * hours;

export class Car {
  constructor() {
    this._brand = undefined;
    this._model = undefined;
    this._yearOfManufacturing = undefined;
    this._maxSpeed = undefined;
    this._maxFuelVolume = undefined;
    this._fuelConsumption = undefined;
    this._currentFuelVolume = 0;
    this._isStarted = false;
    this._mileage = 0;
  }

  get brand() {
    return this._brand;
  }

  set brand(str) {
    if (!isValidStringLength(str)) {
      throw new Error('too long string');
    }
    this._brand = str;
  }

  get model() {
    return this._brand;
  }

  set model(str) {
    if (!isValidStringLength(str)) {
      throw new Error('too long string');
    }
    this._model = str;
  }

  get yearOfManufacturing() {
    return this._yearOfManufacturing;
  }

  set yearOfManufacturing(year) {
    if (!isValidYear(year)) {
      throw new Error('Invalid year');
    }
    this._yearOfManufacturing = year;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  set maxSpeed(value) {
    if (!isValidSpeed(value)) {
      throw new Error('Invalid max speed');
    }

    this._maxSpeed = value;
  }

  get maxFuelVolume() {
    return this._maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (!isValidMaxFuelVolume(value)) {
      throw new Error('Invalid max fuel volume');
    }

    this._maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this._fuelConsumption;
  }

  set fuelConsumption(value) {
    if (!isValidValue(value)) {
      throw new Error('');
    }

    this._fuelConsumption = value;
  }

  get currentFuelVolume() {
    return this._currentFuelVolume;
  }

  get isStarted() {
    return this._isStarted;
  }

  get mileage() {
    return this._mileage;
  }

  start() {
    if (this._isStarted) {
      throw new Error('Машина уже заведена');
    }

    this._isStarted = true;
  }

  shutDownEngine() {
    if (!this._isStarted) {
      throw new Error('Машина ещё не заведена');
    }

    this._isStarted = false;
  }

  fillUpGasTank(value) {
    if (!isValidValue(value)) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (this._maxFuelVolume < this._currentFuelVolume + value) {
      throw new Error('Топливный бак переполнен');
    }

    this._currentFuelVolume += value;
  }

  drive(speed, hours) {
    if (!isValidValue(speed)) {
      throw new Error('Неверная скорость');
    }

    if (!isValidValue(hours)) {
      throw new Error('Неверное количество часов');
    }

    if (!this._isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    if (speed > this._maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    const spentFuel = getSpentFuel(this._fuelConsumption, speed, hours);

    if (spentFuel > this._currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }

    this._currentFuelVolume -= spentFuel;
    this._mileage += speed * hours;
  }
}
