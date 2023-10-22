function multiply5(num: number){
    return num * 5;
}
console.log(multiply5(5));


function convertUpper(str: string){
    return str.toUpperCase();
}
console.log(convertUpper("typescript"));


// default values
function userLogin(username: string, password:string, isNewUser:boolean = true){}


// return type
function multiply10(num: number): number{
    return num * 10;
}
console.log(multiply10(5));

// preferred instead of void
function handleError(err: string): never{
    throw new Error(err);
}

// returning an object
// function createUser():{username:string,isActive:boolean}{
//     return {username:"allan",isActive:true}
// }

// type alias
type User = {
    username:string
    isActive:boolean
}

function createUser(user: User): User{
    return {username:"allan",isActive:true}
}



export {}
