let userId: string | number;
userId = "abc123";
console.log(userId); // Output: abc123
userId = 456789;
console.log(userId); // Output: 456789

function printId(id: string | number){
    console.log(`User ID: ${id}`);
}
printId("abc123"); // Output: User ID: abc123
printId(456789); // Output: User ID: 456789

// Type Narrow function with union type

function printIdWithType(data: string | number){
    if (typeof data === "string") {
        console.log(`User ID (string): ${data.toUpperCase()}`);
    } else {
        console.log(`User ID (number): ${data}`);
    }
}
printIdWithType("abc123"); // Output: User ID (string): ABC123
printIdWithType(456789); // Output: User ID (number): 456789