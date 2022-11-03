/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array.filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/

// input: array and cb
// output: new array that meet requirements
// call back determines if number is odd
// invoking cb in myFilter with num value
// create empty array to hold odd nums
// if codition: is odd pass into array
// return new array

let arr = [1, 2, 3]

let isOdd = (num) => { return num % 2 !== 0 }


function myFilter(array, cb) {
    // Your code here
    let oddArray = [];
    for (let values of array) {
        let oddNum = cb(values);

        if (oddNum === true) {
            oddArray.push(values)
        }

    }
    return oddArray
}

console.log(myFilter(arr, isOdd))

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myFilter;
} catch (e) {
    return null;
}
