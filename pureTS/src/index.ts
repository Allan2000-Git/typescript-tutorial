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

class User{
    readonly city: string = "mangalore" // can be accessed but not overridden
    constructor(public email:string, public password:string){
    }

    get userEmail():string { return this.email; }
}

const allan = new User("allan@gmail.com","12345abcd")
// allan.city = "mangalore"