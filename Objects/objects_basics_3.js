// #################################################################################
// Access a property dynamically:
// #################################################################################

console.log('\n\n// #################################################################################\n// Access a property dynamically:\n// #################################################################################\n');

const user = { name: "John", age: 25, city: "New York" };
let key = "age";
console.log(user[key]); // Output: 25


// #################################################################################
// Check if a property exists in an object:
// #################################################################################

console.log('\n\n// #################################################################################\n// Check if a property exists in an object:\n// #################################################################################\n');

const car = { brand: "Tesla", model: "Model X", year: 2023 };
console.log("brand" in car); // Output: true (for "brand"), false (for "color")
console.log(car.hasOwnProperty("brand")); // Output: true


// #################################################################################
// Get all values of an object:
// #################################################################################

console.log('\n\n// #################################################################################\n// Get all values of an object:\n// #################################################################################\n');

const product = { id: 101, name: "Laptop", price: 1200 };
const newProduct = Object.values(product);
console.log(newProduct);


// #################################################################################
// Find an object with a specific property value in an array:
// #################################################################################

console.log('\n\n// #################################################################################\n// Find an object with a specific property value in an array:\n// #################################################################################\n');

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

  const user_with_Id_2 = users.find(user => user.id === 2)
  console.log(user_with_Id_2) // Find user with id=2
  

// #################################################################################
// Merge two objects:
// #################################################################################

console.log('\n\n// #################################################################################\n// Merge two objects:\n// #################################################################################\n');

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = {...obj1, ...obj2} 
console.log(obj3);


// #################################################################################
// Remove a property from an object:
// #################################################################################

console.log('\n\n// #################################################################################\n// Remove a property from an object:\n// #################################################################################\n');

const student = { name: "Emma", age: 20, grade: "A" };
// Remove the "age" property
delete student.age;
console.log(student);

// #################################################################################
// Convert an array of objects into a single object using .reduce():
// #################################################################################

console.log('\n\n// #################################################################################\n// Convert an array of objects into a single object using .reduce():\n// #################################################################################\n');


const keyValuePairs = [
    { key: "name", value: "Alice" },
    { key: "age", value: 25 },
    { key: "city", value: "New York" }
  ];

const newkeyValuePairs = keyValuePairs.reduce((acc, pairs) => {
    acc[pairs.key] = pairs.value;
    return acc
} ,{});
  console.log(newkeyValuePairs);
  

// #################################################################################
// Sort an array of objects by a property value:
// #################################################################################

console.log('\n\n// #################################################################################\n// Sort an array of objects by a property value:\n// #################################################################################\n');

const people = [
    { name: "Emma", age: 28 },
    { name: "Jack", age: 22 },
    { name: "Sophia", age: 35 }
  ];
  

people.sort((a,b) => b.age - a.age);
console.log(people); // Sort by age in ascending order

// #################################################################################
// Find duplicate values in an array of objects:
// #################################################################################

console.log('\n\n// #################################################################################\n// Find duplicate values in an array of objects:\n// #################################################################################\n');

const items = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "apple" },
    { id: 4, name: "orange" },
    { id: 5, name: "banana" }
];

const duplicate_fruit = items.reduce((acc, item) => {
  acc[item.name] = (acc[item.name] || 0) + 1;
  return acc;
},{})
console.log(duplicate_fruit);
  