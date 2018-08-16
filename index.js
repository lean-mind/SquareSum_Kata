function squareSum(numbers){
    if (isArray(numbers)) {
        return numbers
            .filter(isNumber)
            .map(squareRoot)
            .reduce(suma, 0);
    }
    else {
        return squareRoot(numbers);
    }
}

function squareRoot(number){
    return Math.pow(number, 2);
}

function isNumber(obj){
    return typeof obj === 'number';
}

function isArray(obj){
    return Array.isArray(obj);
}

function suma(totalValues, actualValue){
    return totalValues + actualValue;
}

module.exports = squareSum;