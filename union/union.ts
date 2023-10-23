let score: number | string = 10

score = 50
score = "100"


// objects
type User={
    username: string,
    id: number
}

type Admin={
    name: string,
    id: number
}

let user: User | Admin = {
    username: "Allan",
    id: 133
}


// arrays
const data: (string | number | boolean)[] = [1, "hello", true]


// tuples => maintain the order
let myUser: [string, number]
myUser = ["allan",133]



// enums
// enum seatChoice {
//     AISLE,
//     MIDDLE,
//     WINDOW
// }

// enum seatChoice {
//     AISLE=10,
//     MIDDLE=20,
//     WINDOW
// }

enum seatChoice {
    AISLE="asile",
    MIDDLE=3,
    WINDOW
}

let mySeat = seatChoice.WINDOW


export {}