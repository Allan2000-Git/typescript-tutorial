// console.log("typescript");

class User{
    email:string
    password:string
    constructor(email:string, password:string){
        this.email = email
        this.password = password
    }
}

const allan = new User("allan@gmail.com","12345abcd")