"use strict";
function getSum(numOne, numTwo) {
    return numOne + numTwo;
}
// console.log(getSum(4, 1));
var mySum = function (numOne, numTwo) {
    if (typeof numOne === 'string') {
        numOne = parseInt(numOne);
    }
    if (typeof numTwo === 'string') {
        numTwo = parseInt(numTwo);
    }
    return numOne + numTwo;
};
// The question mark after the parameter name indicates that it is optional
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log('John');
function aVoid() {
    return;
}
