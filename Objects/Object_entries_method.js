const fruits = {Bananas:300, Oranges:200, Apples:500};

console.log(`\nObject.entries(fruits) converts fruits into :`);
console.log(Object.entries(fruits))

// For mapping each array in the outer array
// use map function with each array as parameter

console.log("\nAfter applying map(([item, index])) ");

console.log(Object.entries(fruits).map(([fruit, rate]) => {
    console.log("fruit : ",fruit, " rate : ", rate);
}));


