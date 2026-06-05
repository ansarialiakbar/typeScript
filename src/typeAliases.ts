// type Aliases in TypeScript allow you to create a new name for a type. This can be useful for improving code readability and maintainability. Type aliases can be used to define complex types, union types, intersection types, and more.
// Basic type alias
type UserID = string;
type UserName = string;

// Complex type alias
type user = {
    id: UserID;
    name: UserName;
    email: string;
};

const user1: user = {
    id: "12345",
    name: "Alice",
    email: "alice@example.com"
};
console.log(user1);

const user2: user = {
    id: "67890",
    name: "Bob",
    email: "bob@example.com"
};
console.log(user2);

type AddFunction = (a: number, b: number) => number;

const addNumbers: AddFunction = (x, y) => x + y;
console.log(addNumbers(5, 10)); // 15

// Union type alias
type ID = string | number;
const userId1: ID = "abc123";
const userId2: ID = 456789;
console.log(userId1);
console.log(userId2);

// Intersection type alias

type Person = {
    name: string;
}
type Emp = {
    salary: number;
}

type Staff = Person & Emp;

const staff1: Staff = {
    name: "Charlie",
    salary: 50000
};
console.log(staff1);



