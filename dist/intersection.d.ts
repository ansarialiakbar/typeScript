type AppUser = {
    name: string;
};
type Admin = {
    rights: string[];
};
type AdminUser = AppUser & Admin;
declare let admin1: AdminUser;
interface AppUserInterface {
    name: string;
}
interface AdminInterface {
    rights: string[];
}
type AdminUserInterface = AppUserInterface & AdminInterface;
declare let admin2: AdminUserInterface;
