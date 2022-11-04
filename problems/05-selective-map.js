/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?
*******************************************************************************/
//Create empty array - place holder --
//Inputs: an array, and 2 call backs
//Output: New array where elements are replaced if first call back if true
//First callback will return true if the value includes 'w'
//Second callback will change the word to upperCase
//In the main function - use a for of loop to pull the values
//create variable for test
//test each of those values into the first call back
//if true, run through the second call back
//if true, push into the new array
//if false, push the value without running it through the callback
//return newArray

let colors = ['red', 'white', 'blue']
let newArr = [];
let incLetter = (string) => {return string.includes('w')}
let upperWord = (string2) => {return string2.toUpperCase()}
function selectiveMap(array, selector, mapper) {
    // Your code here
    for(let values of array){
        let boolLetter = selector(values);
        if(boolLetter === true){
            let upperCase = mapper(values);
            newArr.push(upperCase);
        } else{
            newArr.push(values);
        }
    }
    return newArr;
}

console.log(selectiveMap(colors, incLetter, upperWord));

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = selectiveMap;
} catch(e) {
    return null;
}
