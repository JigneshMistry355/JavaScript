// #################################################################################
// Q: Write a function to get an array of all property names (keys) of the book object.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a function to get an array of all property names (keys) of the book object.\n// #################################################################################\n');

const book = { title: "JavaScript Guide", author: "John Doe", pages: 300 };

const all_keys_of_book = Object.keys(book)

console.log(all_keys_of_book);

// #################################################################################
// Q: Convert the student object into an array of key-value pairs.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Convert the student object into an array of key-value pairs.\n// #################################################################################\n');

const student = { name: "Alice", age: 22, grade: "A" };

console.log(Object.entries(student));


// #################################################################################
// Q: Write a function to find the person with the highest age.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a function to find the person with the highest age.\n// #################################################################################\n');

const people = [
    { name: "Jake", age: 25 },
    { name: "Emily", age: 30 },
    { name: "Michael", age: 35 }
  ];

const highest_age = people.reduce((max_age, person) => person.age > max_age ? person : max_age, people[0])
console.log(highest_age);

// #################################################################################
// Q: Remove the year property from the car object.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Remove the year property from the car object.\n// #################################################################################\n');

const car = { brand: "Tesla", model: "Model X", year: 2023 };

delete car.year

console.log(car)


// #################################################################################
// Q: Find All Names Starting with "A" in an Array of Objects
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Find All Names Starting with "A" in an Array of Objects\n// #################################################################################\n');

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Andrew" }
  ];

// const names_starting_with_A = users.filter(user => user.name.startsWith('A'));
const names_starting_with_A = users.filter(user => user.name[0] === 'A');
console.log(names_starting_with_A);

// #################################################################################
// Q: Find All Names Starting with "A" in an Array of Objects
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Find All Names Starting with "A" in an Array of Objects\n// #################################################################################\n');

const fruits = [
    { name: "apple" },
    { name: "banana" },
    { name: "apple" },
    { name: "orange" },
    { name: "banana" }
  ];

  const countFruits = fruits.reduce((acc, fruit) => {
    acc[fruit.name] = (acc[fruit.name] || 0) + 1;
    return acc;
} ,{})

console.log(countFruits);

// #################################################################################
// Q: Write a function to sort the students array by score in descending order.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a function to sort the students array by score in descending order.\n// #################################################################################\n');

const students = [
    { name: "John", score: 85 },
    { name: "Emma", score: 92 },
    { name: "Michael", score: 78 }
  ];
  
students.sort((a,b) => b.score - a.score);
console.log(students);

// #################################################################################
// Q: Write a function to calculate the total price of all orders.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a function to calculate the total price of all orders.\n// #################################################################################\n');

const orders = [
    { product: "Laptop", price: 1200 },
    { product: "Phone", price: 800 },
    { product: "Tablet", price: 500 }
  ];

const total_price = orders.reduce((total, order) => total + order.price, 0);
console.log(total_price);

// #################################################################################
// Q: Write a function to find the company based in "Redmond".
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a function to find the company based in "Redmond".\n// #################################################################################\n');

const companies = [
    { name: "Google", location: { country: "USA", city: "Mountain View" } },
    { name: "Microsoft", location: { country: "USA", city: "Redmond" } },
    { name: "Samsung", location: { country: "South Korea", city: "Seoul" } }
  ];

const company = companies.find(company => company?.location?.city === 'Redmond');
console.log(company);

