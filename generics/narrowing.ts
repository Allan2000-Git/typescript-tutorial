function detectType(val: number | string){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }
    return val+2;
}


// preferred method
function provideId(id: string | null){
    if(!id){
        console.log('Please provide a id');
        return
    }
    return id.toLowerCase()
}

// in-operator
interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

export {}