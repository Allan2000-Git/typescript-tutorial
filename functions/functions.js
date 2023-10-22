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
