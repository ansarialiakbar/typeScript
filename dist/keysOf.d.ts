type PersonInfo = {
    name: string;
    age: number;
    city: string;
};
type PersonKeys = keyof PersonInfo;
declare const personInfo: PersonInfo;
