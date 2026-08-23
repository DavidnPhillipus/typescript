// const person = {name: "Kyle", age:19}
// const  person: {name: string, age: number} = {name: "Kyle", age:19}
const persom: { name: string, age: number , isProgrammer?:boolean } = { name: "Kyle", age: 19 }; //here we are defining the type of the object that will only be the spesified values
persom.isProgrammer = true;
console.log(persom);