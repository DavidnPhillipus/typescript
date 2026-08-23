type Person = { name: string, age: number, isProgrammer?: boolean }; //here we are defining the type of the object that will only be the spesified values
const person1: Person = { name: "Kyle", age: 19 };

const person2:Person = {name: "Kyle", age: 19, isProgrammer: true};



const person: { name: string, age: number , isProgrammer?:boolean } = { name: "Kyle", age: 19 }; //here we are defining the type of the object that will only be the spesified values
person.isProgrammer = true;
console.log(person);
console.log(person1);
console.log(person2);

interface PersonInterface {
    name: string;
    age: number;
    isProgrammer?: boolean;
}

const person3: PersonInterface = { name: "Kyle", age: 19 };
const person4: PersonInterface = { name: "Kyle", age: 19, isProgrammer: true };


console.log(person3);
console.log(person4);

