// In any data type, we can assign any value to a variable, and it can be reassigned to a different type of value without any type errors. This flexibility allows us to work with dynamic data, but it also means that we lose the benefits of type safety provided by TypeScript.
let data: any = "Hello, TypeScript!";
data = 42; // Reassigning to a number
data = { name: "Alice", age: 30 }; // Reassigning to an object
console.log(`The value of data is ${data}`);
console.log(`The type of data is ${typeof data}`);


// unknown is a type that represents any value, but it is safer than any because it requires type assertions or type checks before performing operations on the value. It is often used when we want to accept values of any type but still want to maintain some level of type safety.
let value: unknown = "Hello, TypeScript!";
// console.log(value.toUpperCase()); // Error: Object is of type 'unknown'.
if (typeof value === "string") {
    console.log(`The length of the string is ${value.length}`);
}