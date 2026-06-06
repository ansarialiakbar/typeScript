
function identity<T>(value:T) :T {
    return value;
}

console.log(identity<string>("Hello, TypeScript!"));
console.log(identity<number>(42));

//generic array

function getFirstElement<T>(arr:T[]):T | undefined {
    return arr[0];
}
console.log(getFirstElement<number>([1, 2, 3, 4, 5]));
console.log(getFirstElement<string>(["Alice", "Bob", "Charlie"]));