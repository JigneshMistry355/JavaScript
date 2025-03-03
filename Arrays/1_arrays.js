console.log("#".repeat(50));
console.log();
// ######################################################
// Creating array elements
// ######################################################
// 1. Creating array using array literal
let myArray = [1,2,3,4,5];
console.log("1. Creating array using array literal: \n==> ",myArray);
// 2. Creating array using array constructor
let myArray2 = new Array(1,2,3,4,5);
console.log("2. Creating array using array constructor: \n==> ", myArray2);
// 3. Creating array using Array.of()
let myArray3 = Array.of(1,2,3,4,5,6,7,8,9);
let myArray4 = Array.of(10, 'hello', true, {color:'red'}, [1,2,3]);
console.log("3. Creating array using Array.of(): \n==> ",myArray3, "\n==> ", myArray4);

console.log("#".repeat(50));
console.log();
// ######################################################
// Accessing array elements
// ######################################################

console.log("Accessing array elements");
// 1. First element
console.log("1. First element", endl=' ');
console.log("==> ",myArray[0])

// 2. Last element
console.log("2. Last element")
let lastElementIndex = myArray.length - 1
console.log("==> ",myArray[lastElementIndex]);

// 3. Accessing using loop
console.log("3. Accessing using loop");
for (let i = 0; i < myArray.length; i++) {
    console.log("index [",i,"] ==> ",myArray[i]);
}

// 4. Accessing using at()
console.log("4. Accessing using at()");
console.log("Last element : ",myArray.at(-1))

// ######################################################
// Modify elements
// ######################################################

console.log();
console.log("#".repeat(50));
// 1. Modify at index 1
myArray[1] = 100;
console.log("1. Modify at index 1");
console.log("==> ",myArray);


console.log();
console.log("#".repeat(50));
// ######################################################
// Adding Elements to array
// ######################################################
console.log("Adding Elements to array");
// 1. Insert at end
console.log("1. Insert at end");
myArray.push(6);
console.log("==> ",myArray);
// 2. Insert at beginning
console.log("2. Insert at beginning");
myArray.unshift(0);
console.log("==> ",myArray);

console.log();
console.log("#".repeat(50));
// ######################################################
// Deleting Elements from array
// ######################################################
console.log("Deleting Elements from array");
// 1. pop() => removes and returns last element
console.log("1. Remove last element");
let lastElement = myArray.pop();
console.log("Removed ==> ", lastElement)
console.log("==> ",myArray);
// 2. shift() => removes and returns first element
console.log("1. Remove first element");
let firstElement = myArray.shift();
console.log("Removed ==> ", firstElement);
console.log("==> ",myArray);
// 3. splice(x,y) => removes y elements starting from index x
console.log("1. Remove y elements");
myArray.splice(1,2);
console.log("==> ",myArray);

console.log();
console.log("#".repeat(50));
// ######################################################
// Array foreach
// ######################################################
console.log("Square of each item using for each");
let squareOfItems = [];
myArray.forEach((item) => {
    squareOfItems.push(item*item);
});
console.log(myArray,"==> ", squareOfItems);

console.log();
console.log("#".repeat(50));
// ######################################################
// concatenation of arrays
// ######################################################
console.log("concatenation of arrays ::::::::")
let arrayToConcat1 = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]
let arrayToConcat2 = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]
console.log(arrayToConcat1, " + ", arrayToConcat2);
let concatArray = arrayToConcat1.concat(arrayToConcat2);
console.log("==> ",concatArray);

console.log();
console.log("#".repeat(50));
// ######################################################
// Conversion of Array to string
// ######################################################
console.log("Conversion of Array to string");
console.log("==> ", concatArray.toString());

console.log();
console.log("#".repeat(50));
// ######################################################
// Check the type of an array
// ######################################################
// 1. Using typeof to check type
console.log("1. Check the type of an array using typeof");
console.log("Type of my array is : ",typeof concatArray);
// 2. Using isArray()
console.log("2. Using isArray()");
console.log("myArray is an array! : ",Array.isArray(myArray)); 


console.log();
console.log("#".repeat(50));
// ######################################################
// Array length
// ######################################################
console.log("Check array length");
// 1. Accessing array length
console.log("1. Accessing array length");
console.log("Length of the array is : ",myArray.length);
// 2. Truncating array
console.log("2. Truncating array");
myArray.length = 2;
console.log("Length of the array is : ",myArray.length);
// 3. Extending array
console.log("3. Extending array");
myArray.length = 6;
console.log("Extended array length : ", myArray.length, "==> ", myArray);

console.log();
console.log("#".repeat(50));
// ######################################################
// Array from() ==> creating an array from an iterable
// ######################################################
console.log("Array from() method");
let arrayForFromMethod = Array.from("1234567890");
console.log(arrayForFromMethod);



