"use strict";
let person = ["Alice", 30];
console.log(`Name: ${person[0]}, Age: ${person[1]}`);
// Tuple with optional elements
let employee = ["Bob", 25];
console.log(`Employee Name: ${employee[0]}, Age: ${employee[1]}`);
employee[2] = "Developer";
console.log(`Employee Name: ${employee[0]}, Age: ${employee[1]}, Position: ${employee[2]}`);
let product = ["Laptop", 999.99, true];
console.log(`Product: ${product[0]}, Price: ${product[1]}, In Stock: ${product[2]}`);
let [firstName, lastName] = ["Alice", "Anderson"];
console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
// destructuring of tuple with optional elements
let [empName, empAge, empPosition = "Unknown"] = ["Bob", 25];
console.log(`Employee Name: ${empName}, Age: ${empAge}, Position: ${empPosition}`);
// Tuple with rest elements
let coordinates = [10, 20, 30, 40, 50];
console.log(`Coordinates: ${coordinates}`);
// Tuple with different types of elements
let mixedTuple = ["Hello", 42, true];
console.log(`Mixed Tuple: ${mixedTuple}`);
// use cases of tuples:
// 1. To represent a fixed number of elements of different types.
// 2. To return multiple values from a function.
// 3. To represent a record with a specific structure.
// 4. To create a type-safe way to handle data that has a known structure but different types of values.
//# sourceMappingURL=tuples.js.map