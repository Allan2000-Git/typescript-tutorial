interface User{
    readonly dbId,
    id: number,
    email:string,
    googleId?:string
    // startTrial: () => string
    startTrial(): string
}

interface User{
    githubToken: string
}

interface Admin extends User{
    role: "admin" | "learner"
}

const user: User = {
    dbId: 2133,
    id:133,
    githubToken:"a133jf2000",
    email:"allan@gmail.com",
    startTrial: () =>{
        return "trial started"
    }
}


// interface vs type



export {}