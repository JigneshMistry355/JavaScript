// #################################################################################
// Q. Find name in person
// #################################################################################
console.log('\n\n// #################################################################################\n// Q. Find name in person\n// #################################################################################\n');

const person = { name: "John", age: 30, city: "New York" };
console.log(person.name);
console.log(person["name"]);

// #################################################################################
// Q. check if a key exists
// #################################################################################
console.log('\n\n// #################################################################################\n// Q. check if a key exists\n// #################################################################################\n');
const user = { id: 101, username: "Alice" };
const key = "username"

console.log("email" in user); // 1
console.log(Object.keys(user).forEach((user) => { // 2
    if (user === key) {
        console.log(true);
    }
}));

// #################################################################################
// Q: Write a JavaScript function to find the product with id: 2.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a JavaScript function to find the product with id: 2.\n// #################################################################################\n');
const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
  ];
console.log("Q: Write a JavaScript function to find the product with id: 2.");

const foundProduct = products.find(product => product.id === 2);
console.log(foundProduct);

console.log(products.map((item, index) => {
    // console.log(index, " : ", item);
    Object.entries(item).map(([key, value]) => {
        if (value === 2)
        console.log(item);
    })
}))

// #################################################################################
// Q: Write a loop to print each key-value pair.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a loop to print each key-value pair.\n// #################################################################################\n');
const student = { name: "Emma", grade: "A", age: 20 };
Object.entries(student).map(([key, value]) => {console.log(key,": ", value);
})

for (let i in student) {
    console.log(`${i} : ${student[i]}`);
}

// #################################################################################
// Q: How do you access the "San Francisco" value?
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: How do you access the "San Francisco" value?\n// #################################################################################\n');

const company = { 
    name: "TechCorp",
    location: { city: "San Francisco", country: "USA" }
  };

console.log(company?.location?.city);

// #################################################################################
// Q: Write a JavaScript function using .find() to get the user with id: 3.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a JavaScript function using .find() to get the user with id: 3.\n// #################################################################################\n');
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

const findUser = users.find(user => user.id === 3);
console.log(findUser);

// #################################################################################
// Q: How do you merge obj1 and obj2 into a single object?
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: How do you merge obj1 and obj2 into a single object?\n// #################################################################################\n');

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 ={ ...obj1, ...obj2}
console.log(obj3)
 
// #################################################################################
// Q: Write a function to return all employees older than 25.
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: Write a function to return all employees older than 25.\n// #################################################################################\n');

const employees = [
    { name: "John", age: 28 },
    { name: "Sarah", age: 22 },
    { name: "Tom", age: 35 }
  ];

  const olderEmployess = employees.filter(employee => employee.age > 25)
  console.log(olderEmployess)

  // #################################################################################
// Q: What happens if you try to access car.year? How do you handle it safely?
// #################################################################################

console.log('\n\n// #################################################################################\n// Q: What happens if you try to access car.year? How do you handle it safely?\n// #################################################################################\n');

const car = { brand: "Toyota", model: "Corolla" };

console.log(car?.year ?? "Year not avaliable");