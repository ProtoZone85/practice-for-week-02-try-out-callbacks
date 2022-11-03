/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array.forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/

// Problem: create function that calls a callback on each element of the array
// Input: Array
// Callback input: element and index
// Create callback to invoke in the myForEach function
// create variable array for cities


let cities = ['Houston', 'New York', 'Tokyo']

function myForEach(array, cb) {
    // Your code here
    let result = [];
    for(let value of array) {
         result.push(cb(value));
    }
    return result;

}



let upperFunction = (city) => {
    let capCity = city.toUpperCase();
    return capCity;
}

    console.log(myForEach(cities, upperFunction));

// TESTING GIT PUSH again
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myForEach;
} catch (e) {
    return null;
}
