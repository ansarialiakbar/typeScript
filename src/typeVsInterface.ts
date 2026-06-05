// type vs interface in TypeScript
// Type cannot redeclare the same name, but interface can be merged

// primitive aliases
type Id = string | number
interface User {
    id: Id;
    name: string;
}

// extending and composing types and interfaces
type Animal = {
    name: string;
}
type Dog = Animal & {
    breed: string;
}

interface Vehicle {
    make: string;
    model: string;
}
interface Car extends Vehicle {
    year: number;
}