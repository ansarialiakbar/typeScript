// never data type represents values that never occur. It is often used to indicate that a function never returns or that a variable can never have a value.

// A function that never returns can be defined using the never type. This is useful for functions that throw an error or have an infinite loop.

// function throwError(message: string): never {
//     throw new Error(message);
// }   
// throwError("This is an error message.");

// function infiniteLoop(): never {
//     while (true) {
//         console.log("This is an infinite loop.");
//     }
// }
// infiniteLoop(); 
// infiniteLoop(); // Uncommenting this line will cause an infinite loop, so be cautious when using it.

function greet(): void {
    console.log("Hello, TypeScript!");
}
let result = greet();
console.log(`The value of result is ${result}`);

// Real world use caes
 // Never: Error handling and exhaustive checks
 // infiniteLoop: game loops, server processes, or any scenario where you want to keep the program running indefinitely without returning a value.