// shorthand array literal
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// array constructor
let category = new Array("A", "B", "C");
console.log(category);

// accessing elemens
console.log("First element category: " + category[0]);
console.log("Second element arr : " + arr[1]);

// accessing last element
console.log("Last element category: " + category[category.length - 1]);

// modify or replace elements
arr[1] = 10;
console.log("Modified arr: " + arr);

// append element
category.push("D"); // append at end
arr.unshift(0); // insert at beginning
console.log("\nAfter inserting");
console.log(
  "Insert at beginning: " + arr + "\n" + "Insert at end: " + category
);

// Remove elemnts
arr.shift(); // remove index 0
category.pop(); // remove last element
arr.splice(0, 2); // remove multiple elements mention at right starting from mentioned at left,
// in this case include index 0, and index 1
console.log("After removing");
console.log("remove from arr: " + arr);
console.log("Remove from category: " + category);
console.log("remove multiple elements from arr: " + arr);

// increase or decrease array length
arr.length = 10;
console.log(arr);

arr.length = 2;
console.log(arr);

// iterate through the array
console.log("\nLooping through category:");
for (let i = 0; i < category.length; i++) {
  console.log(category[i]);
}

// for each
console.log("\nUsing forEach Loop: ");
category.forEach(function myFunc(element) {
  console.log(element);
});

// concat two arrays
console.log("\nConcat arrays: ");
let arr1 = new Array(1, 2, 3);
let arr2 = new Array("a", "b", "c");
let arr3 = arr1.concat(arr2);
console.log(arr3);

// array to string
console.log("\nConvert array to string");
console.log(arr1.toString());

//check type
console.log("\nType check of arr: "+typeof arr); // --> returns object for array
console.log("\nRecognize an array:");
console.log("Using isArray(): "+Array.isArray(arr));
console.log("Using instanceof: "+arr instanceof Array);


