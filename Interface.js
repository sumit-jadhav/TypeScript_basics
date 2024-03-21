"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = {
    name: "Ram",
    id: 1,
    email: "USER@GMAIL",
};
console.log(userName, userLogin);
let employees = { name: "Ram", id: 1, email: "", salary: 10000 };
let [user1, user2, ...restUser] = [
    { name: "John", id: 1, email: "" },
    { name: "John", id: 2, email: "" },
    { name: "John", id: 3, email: "" },
    { name: "John", id: 4, email: "" },
];
console.log(user1);
console.log(user2);
console.log(restUser);
let result = restUser.filter((user) => user.id > 3);
console.log(result);
