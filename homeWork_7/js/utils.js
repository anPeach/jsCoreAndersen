const roundToEight = (value) => {
    return Math.round(value * 100000000) / 100000000;
}

const sum = (firstVal, secondVal) => firstVal + secondVal;
const mul = (firstVal, secondVal) => firstVal * secondVal;
const sub = (firstVal, secondVal) => firstVal - secondVal;
const div=(firstVal, secondVal) =>{
    if(secondVal === 0) {
        throw new Error('attempt to divide by 0');
    }

    return roundToEight(firstVal / secondVal);
}

export {div, mul, sub, sum}