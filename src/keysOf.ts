// keys of operator is used to get the keys of an object as a union type. It is a type operator that takes an object type and returns a union of its keys as string literals.
// use case of keys of operator:
// 1. To get the keys of an object as a union type.
type PersonInfo = {
    name: string;
    age: number;
    city: string;
};  
type PersonKeys = keyof PersonInfo; // "name" | "age" | "city"
const personInfo: PersonInfo = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(`Person Keys: ${Object.keys(personInfo)}`); // Person Keys: name,age,city
