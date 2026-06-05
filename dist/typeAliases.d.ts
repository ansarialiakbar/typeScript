type UserID = string;
type UserName = string;
type user = {
    id: UserID;
    name: UserName;
    email: string;
};
declare const user1: user;
declare const user2: user;
type AddFunction = (a: number, b: number) => number;
declare const addNumbers: AddFunction;
type ID = string | number;
declare const userId1: ID;
declare const userId2: ID;
type Person = {
    name: string;
};
type Emp = {
    salary: number;
};
type Staff = Person & Emp;
declare const staff1: Staff;
