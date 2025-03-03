// map function
// apply a func to every item of an iterable
// map does not change original array
// map does not execute functions for empty elements

function square(num) {
    return num * num;
}

const numbers = [1,2,3,4]
const newArray = numbers.map(square)
console.log(newArray);
