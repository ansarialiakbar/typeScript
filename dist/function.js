"use strict";
function addNum(a, b) {
    return (a + b).toString();
}
console.log(addNum(5, 10)); // Output: "15"
// Function with optional parameter
function greet1(firstName, lastName) {
    if (lastName) {
        return `Hello, ${firstName} ${lastName}!`;
    }
    return `Hello, ${firstName}!`;
}
console.log(greet1("Alice")); // Output: Hello, Alice!
console.log(greet1("Bob", "Smith")); // Output: Hello, Bob Smith!
// Function with default parameter
function greetWithDefault(firstName, lastName = "Doe") {
    return `Hello, ${firstName} ${lastName}!`;
}
console.log(greetWithDefault("Charlie")); // Output: Hello, Charlie Doe!
console.log(greetWithDefault("Dave", "Johnson")); // Output: Hello, Dave Johnson!
//# sourceMappingURL=function.js.map