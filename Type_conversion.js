// Type conversion (or typecasting) means transfer of data from one data type to another.
let result = "Hello" + 123; // result is "Hello123" (string)
console.log(result, typeof result);
let sum = 5 + true; // sum is 6 (number)
console.log(sum, typeof sum);
console.log(5 == "5"); // true
console.log(5 === "5"); // false

let strNum = "123";
console.log(strNum, typeof strNum); // string
let num = Number(strNum); // num is 123 (number)
console.log(num, typeof num); // number
let intValue = parseInt("45.6"); // intValue is 45 (number)
console.log(intValue, typeof intValue); // number
let floatValue = parseFloat("78.9"); // floatValue is 78.9 (number)
console.log(floatValue, typeof floatValue); // number

let numVal = 42;
let str = String(numVal); // str is "42" (string)
let anotherStr = numVal.toString(); // anotherStr is "42" (string)
console.log(str, typeof str); // string
console.log(anotherStr, typeof anotherStr); // string



let zero = 0;
let isTrue = Boolean(zero); // isTrue is false (boolean)
console.log(isTrue, typeof isTrue); // boolean
let nonEmptyString = "abc";
let isTrue2 = Boolean(nonEmptyString); // isTrue2 is true (boolean)
console.log(isTrue2, typeof isTrue2); // boolean