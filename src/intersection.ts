type AppUser = {
    name: string;
}
type Admin = {
    rights: string[];
}

type AdminUser = AppUser & Admin;

let admin1: AdminUser = {
    name: "Dave",
    rights: ["read", "write", "delete"]
};
console.log(admin1);

// intersection by using interface
interface AppUserInterface {
    name: string;
}
interface AdminInterface {
    rights: string[];
}   
// interface AdminUserInterface extends AppUserInterface, AdminInterface {}

// let admin2: AdminUserInterface = {
//     name: "Eve",
//     rights: ["read", "write"]
// };
// console.log(admin2);
 type AdminUserInterface = AppUserInterface & AdminInterface;

let admin2: AdminUserInterface = {
    name: "Eve",
    rights: ["read", "write"]
};
console.log(admin2);
