let numbers: number[] = [1, 2, 3, 4, 5];

// Map method return a new array.
// original array is not changed.
// map method use cases:
// 1. To transform each element in an array.
// 2. To create a new array based on the original array with some modifications.
// 3. To perform operations on each element of the array and return a new array with the results.
let doubleNumbers = numbers.map(num => num*2);
console.log(`Double of numbers: ${doubleNumbers}`);

// Filter method return a new array with all elements that pass the test implemented by the provided function.
// original array is not changed.
// filter method use cases:
// 1. To filter out elements from an array based on a condition.
// 2. To create a new array with only the elements that satisfy a certain criteria.
// 3. To remove unwanted elements from an array.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);

let userNames: string[] = ["Alice", "Bob", "Charlie", "David", "Ashley"];
let filteredNames = userNames.filter(name => name.startsWith("A"));
console.log(`Names starting with 'A': ${filteredNames}`);

// Reduce method executes a reducer function on each element of the array, resulting in a single output value.
// original array is not changed.
// reduce method use cases:
// 1. To accumulate a single value from all elements in the array.
// 2. To perform aggregations on the elements of the array.
// 3. To transform the array into a different data structure.
let totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of numbers: ${totalSum}`);