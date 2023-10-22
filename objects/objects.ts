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

// combine multiple type
type cardNumber = {
    cardNum: number
}

type cardDate = {
    cardDate: string
}

type cardCvv = {
    cardCVVNum: number
}

type cardDetails = cardNumber & cardDate & cardCvv



// arrays
const heros: string[] = []
heros.push("ironman")

const nums:number[] = []
nums.push(3)


export {}