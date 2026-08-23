// Select the input element with class "input" and type assertion to HTMLInputElement
const input = document.querySelector<HTMLInputElement>(".input")

// Log the value of the input element if it exists
console.log(input?.value)

// Generic function to get the second element of an array
function getSecond<T>(array: T[]){
    return array[1]
}

// Example arrays
const a = [1, 2, 3]
const b = ["a", "b", "c"]

// Get the second element from each array
const second = getSecond(a)
const secondString = getSecond(b)

// Create a Set of strings and add an element to it
const p = new Set<string>()
p.add("a")

// Create a Map with string keys and number values, and set a key-value pair
const q = new Map<string, number>()
q.set("a", 1)

// Generic type for API response
type APIResponse<TData> = {
    data : TData 
    isError: boolean
}

// Specific type for user response using the generic APIResponse type
type UserResponse = APIResponse<{name : string, age: number}>

// Example user response object
const r : UserResponse = {
    data: { name: "Sobba" , age: 19},
    isError: false
}

// Generic type for API response with a default type for TData
type APIResponse2<TData = {status : number}> = {
    data : TData 
    isError: boolean
}

// Example API response object using the default type
const s: APIResponse2 = {
    data: { status: 200},
    isError: false
}

// Generic type for API response with a constraint that TData must be an object
type APIResponse3<TData extends object> = {
    data : TData 
    isError: boolean
}

// Example API response object with a specific type for TData
const t: APIResponse3<{message: string}> = {
    data: { message: "Hello"},
    isError: false
} 

// Array of strings
const u : Array<string> = ["a", "b", "c"]

// Generic function to convert an array of key-value pairs to an object
function aToO<T>(array: [string, T][]){
    const obj: any = {}

    array.forEach(([key, value]) => {
        obj[key] = value
    })

    return obj // Added return statement to return the created object
}

// Example array of key-value pairs
const arr:[string, number | boolean ][] = [
    ["keyOne", 1],
    ["keyTwo", 2],
    ["keyThree", true]
]

// Convert the array of key-value pairs to an object
const obj = aToO(arr)
