function getSum(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

// console.log(getSum(4, 1));

let mySum = function(numOne: any, numTwo: any): number {
  if (typeof numOne === 'string') {
    numOne = parseInt(numOne);
  }
  if (typeof numTwo === 'string') {
    numTwo = parseInt(numTwo);
  }
  return numOne + numTwo;
};

// The question mark after the parameter name indicates that it is optional
function getName(firstName: string, lastName?: string): string {
  return firstName + ' ' + lastName;
}

console.log('John');

function myVoid(): void {
  return;
}
