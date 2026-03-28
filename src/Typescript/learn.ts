let username: string = "Arjun"
let age: number = 25
let isLoggedIn: boolean = false

// Array of strings
let skills: string[] = ["React", "TypeScript", "Redux"]

// Array of numbers
let scores: number[] = [95, 87, 92]

// Union type — can be string OR number
let id: string | number = 101
id = "ABC123" // also valid

// Any — escapes TypeScript (avoid this!)
let anything: any = "hello"
anything = 42 // no error — but defeats the purpose