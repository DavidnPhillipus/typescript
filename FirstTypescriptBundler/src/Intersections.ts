type Person = {
    name: string;
    age: number;
    isProgrammer?: boolean;
}


type PersonWithId = Person & {
    id: string | number
}


const person: PersonWithId = { name: "Kyle", age: 19, id: 1 }


interface Person2 { 
    name: string;
    age: number;
    isProgrammer?: boolean;
}

interface PersonWithId2 extends Person2 {
    id: string | number
}//You can extend an interface with even more than 3 interfaces.


const person2: PersonWithId2 = { name: "Kyle", age: 19, id: 1 }