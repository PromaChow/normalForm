import { User } from "./User";
let Users: User[] = [];

export function addUser(user: User) {
  Users.push(user);
}
export function getUserData() {
  return Users;
}
