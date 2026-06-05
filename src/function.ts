 function addNum(a: number, b: number): string {
    return (a+b).toString();
}   
console.log(addNum(5, 10)); // Output: "15"

// Function with optional parameter
function greet1(firstName: string, lastName?: string):string {
    if (lastName) {
        return `Hello, ${firstName} ${lastName}!`;
    }
    return `Hello, ${firstName}!`;
}
console.log(greet1("Alice")); // Output: Hello, Alice!
console.log(greet1("Bob", "Smith")); // Output: Hello, Bob Smith!

// Function with default parameter
function greetWithDefault(firstName: string, lastName: string = "Doe"): string {
    return `Hello, ${firstName} ${lastName}!`;
}
console.log(greetWithDefault("Charlie")); // Output: Hello, Charlie Doe!
console.log(greetWithDefault("Dave", "Johnson")); // Output: Hello, Dave Johnson!