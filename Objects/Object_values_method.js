// returns an array of values of all properties of an object

const fruits = {Bananas:300, Oranges:200, Apples:500};

console.log(Object.values(fruits).map((item, index) => {
    console.log(index, item)
}));
