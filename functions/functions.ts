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

export {}
