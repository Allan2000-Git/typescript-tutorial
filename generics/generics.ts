let scores:Array<number> = []
let names:Array<string> = []

// return either number or boolean value
function identityOne(val: number | boolean): number | boolean {
    return val
}

// returns anything. if we pass a number, then it can return a string also
function identityTwo(val: any):any{
    return val
}

// once if we pass a number, then it will return a number itself
// Type is locked as number
function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}


//----------------------------------

function getProducts<T>(prod: T[]):T{
    return prod[3]
}

const getProds = <T>(prod: T[]): T =>{
    return prod[3]
}



function anotherFunc<T, U>(valOne:T, valTwo:U):{}{
    return {
        valOne,
        valTwo
    }
}

anotherFunc(3, "5")//valid
anotherFunc(2, {})//valid




export {}