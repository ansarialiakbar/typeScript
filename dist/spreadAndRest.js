"use strict";
// Rest opertor is used to collect the remaining elements into an array
// use case of rest operator:
// 1. To collect the remaining elements of an array into a new array.
let Numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = Numbers;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);
// 2. To collect the remaining properties of an object into a new object.
let Person = {
    username: "Alice",
    age: 30,
    city: "New York"
};
let { username, ...otherDetails } = Person;
console.log(`Username: ${username}, Other Details: ${JSON.stringify(otherDetails)}`);
// Rest operator can also be used in function parameters to collect the remaining arguments into an array.
function Sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(`Sum: ${Sum(1, 2, 3, 4, 5)}`);
// Spread operator is used to expand an array or object into individual elements
// use case of spread operator:
// 1. To expand an array into individual elements.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(`Combined Array: ${combinedArr}`);
// 2. To expand an object into individual properties.
let obj1 = { username: "Alice", age: 30 };
let obj2 = { city: "New York", country: "USA" };
let combinedObj = { ...obj1, ...obj2 };
console.log(`Combined Object: ${JSON.stringify(combinedObj)}`);
// 3. To create a new array or object with some modifications.
let modifiedArr = [...arr1, 4, 5];
console.log(`Modified Array: ${modifiedArr}`);
let modifiedObj = { ...obj1, age: 31 };
console.log(`Modified Object: ${JSON.stringify(modifiedObj)}`);
//# sourceMappingURL=spreadAndRest.js.map