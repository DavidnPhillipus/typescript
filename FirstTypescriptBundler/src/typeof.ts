const person = { name: 'John', age: 25 };
// const people:{name: string , age: number}[] = []
const people: (typeof person)[] = []

people.push({name: "Sara", age: 30})
// people.push(2)//this will give an error because the type of the array is defined as an array of objects with name and age properties

function sayHi(name: string){
    console.log(`Hi ${name}`)
}


type funcType = typeof sayHi

const evilD : string = "I am evil"

const batMan: typeof evilD = "I am batman"

console.log(batMan)
console.log(evilD)