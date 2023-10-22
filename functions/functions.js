"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiply5(num) {
    return num * 5;
}
console.log(multiply5(5));
function convertUpper(str) {
    return str.toUpperCase();
}
console.log(convertUpper("typescript"));
// default values
function userLogin(username, password, isNewUser) {
    if (isNewUser === void 0) { isNewUser = true; }
}
// return type
function multiply10(num) {
    return num * 10;
}
console.log(multiply10(5));
// preferred instead of void
function handleError(err) {
    throw new Error(err);
}
function createUser(user) {
    return { username: "allan", isActive: true };
}
