let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
Alternate array declaration syntax:

let strArray: string[];
let numArray: number[];
let boolArray: boolean[];
*/

let strArray: Array<string>;
let numArray: Array<number>;
let boolArray: Array<boolean>;

let strNumTuple: [string, number];

myString = 'hello from TS!';
myNum = 22;
myBool = true;
myVar = 5;

strArray = ['hello', 'world'];
numArray = [1, 2, 3];
boolArray = [true, false, true];

strNumTuple: ['hello', 4];

let myVoid: void = null;
let myNull: null = null;
let myUndefined: undefined = undefined;

console.log(myBool);
