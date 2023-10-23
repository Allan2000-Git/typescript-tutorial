"use strict";
// console.log("typescript");
// class User{
//     public email:string
//     password:string // by default public
//     readonly city: string = "mangalore" // can be accessed but not overridden
//     constructor(email:string, password:string){
//         this.email = email
//         this.password = password
//     }
// }
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.city = "mangalore"; // can be accessed but not overridden
    }
    get userEmail() { return this.email; }
}
const allan = new User("allan@gmail.com", "12345abcd");
// allan.city = "mangalore"
