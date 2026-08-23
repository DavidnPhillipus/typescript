type Person = {
    id:  number;
    name: string;
    age: number;
}

// const age = getValue('age', {id: 1, name: 'John', age: 25});//This will return 25 because we are passing the key 'age' and the object {id: 1, name: 'John', age: 25} to the getValue function. The getValue function will return the value of the key 'age' from the object.
// function getValue(key , person: Person) {
//     return person[key];
// }



const age = getValue('age', {id: 1, name: 'John', age: 25});//Now the age variable can be any tyoe in the Person type. So we can pass any key of the Person type to the getValue function. The getValue function will return the value of the key from the object.
function getValue(key: keyof Person , person: Person) {
    return person[key];
}


