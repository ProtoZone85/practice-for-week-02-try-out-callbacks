/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array.map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/

// Input: array and callback
// Output: Array of new elements (GDP # replacing country)
//

let countries = ['USA', 'China', 'Russia']

function myMap(array, cb) {

    // Your code here
    // let gdp = [];
    // let gdpValue = ["23T", "18T", "1.8T"];

    // for (let values of array) {
    array = cb(array)

    return countries

    // }

}

let spliceCountries = (arr) => { return arr.splice(0, 3, "23T", "18T", "1.8T") }

console.log(myMap(countries, spliceCountries));

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myMap;
} catch (e) {
    return null;
}
