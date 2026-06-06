"use strict";
// function type in TypeScript
// function type is a way to define the type of a function in TypeScript. It allows you to specify the types of the parameters and the return type of a function. This helps in ensuring that the function is used correctly and prevents type errors.
// use case of function type:
// 1. To define the type of a function that takes parameters and returns a value.
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
// 2. To define the type of a function that takes parameters but does not return a value (void).
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Alice"); // Output: Hello, Alice!
// 3. To define the type of a function that takes no parameters and returns a value.
function getCurrentDate() {
    return new Date();
}
console.log(getCurrentDate()); // Output: Current date and time
// 4. To define the type of a function that takes no parameters and does not return a value (void).
function logMessage() {
    console.log("This is a log message.");
}
logMessage(); // Output: This is a log message.
// 5. To define the type of a function that takes parameters of different types and returns a value.
function concatenate(a, b) {
    return a + b.toString();
}
console.log(concatenate("The number is: ", 42)); // Output: The number is: 42
// 6. To define the type of a function that takes parameters of different types and does not return a value (void).
function displayInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayInfo("Bob", 25); // Output: Name: Bob, Age: 25
// 7. To define the type of a function that takes optional parameters and returns a value.
function formatName(firstName, lastName) {
    return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(formatName("John")); // Output: John
console.log(formatName("John", "Doe")); // Output: John Doe
// 8. callback function type
function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const data = "Fetched data";
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log(data); // Output: Fetched data
});
//9. another example of callback function type
function processNumbers(numbers, callback) {
    const result = numbers.reduce((acc, curr) => acc + curr, 0);
    callback(result);
}
processNumbers([1, 2, 3, 4, 5], (result) => {
    console.log(`The sum of the numbers is: ${result}`); // Output: The sum of the numbers is: 15
});
//
//# sourceMappingURL=functionType.js.map