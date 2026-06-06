"use strict";
function identity(value) {
    return value;
}
console.log(identity("Hello, TypeScript!"));
console.log(identity(42));
//generic array
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3, 4, 5]));
console.log(getFirstElement(["Alice", "Bob", "Charlie"]));
//# sourceMappingURL=genericTypeScript.js.map