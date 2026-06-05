type Id = string | number;
interface User {
    id: Id;
    name: string;
}
type Animal = {
    name: string;
};
type Dog = Animal & {
    breed: string;
};
interface Vehicle {
    make: string;
    model: string;
}
interface Car extends Vehicle {
    year: number;
}
