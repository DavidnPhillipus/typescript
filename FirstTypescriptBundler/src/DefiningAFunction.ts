 function printName(name1: string, name2: string) {
    console.log(name1 + " " + name2)
 }

console.log(printName("Kyle", "Simpson"));

function sum(a: number, b: number): number {
    return a + b;
}

const c = sum(1, 2);
console.log(c);

function printPerson(person: { name: string, age: number, isProgrammer?: boolean }) {
    console.log(person.name)
}

printPerson({ name: "Kyle", age: 19 });

