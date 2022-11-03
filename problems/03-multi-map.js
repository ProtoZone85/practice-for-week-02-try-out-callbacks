/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
//Inputs: value, cb
//Output: run in a cb * n
//Create callback function that multiplies value by 10  --
//Create a function - multimap
//invoke the callback n times using for loop
//return new value
let multiplyNumber = (num) => num * 10;

function multiMap(val, n, cb) {
  // Your code here
  let newNum;
  for(let i = 1; i <= n; i++){
       console.log(val = cb(val));
    // otherVariable = newNum
  }
  return val;
}

console.log(multiMap(5,3,multiplyNumber));

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch (e) {
  return null;
}
