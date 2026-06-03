// Symbol is a primitive data type introduced in ES6. It is used to create unique identifiers for object properties. Each time you create a symbol, it is guaranteed to be unique, even if it has the same description.
let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2); // false

// Symbol with description
let id3 = Symbol('id');
let id4 = Symbol('id');
let User ={
    [id3]: 'value',
    [id4]: 'value2' 
}
console.log(User[id3]); // value
console.log(User[id4]); // value2

let token: symbol = Symbol('token');
console.log(token); // Symbol(token)