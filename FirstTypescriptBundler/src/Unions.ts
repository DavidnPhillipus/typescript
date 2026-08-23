let id:string | number;
id = 10;
id = "I am an ID";


type Person = {
    id: string | number;
    isProgrammer?: boolean;
}


type Todo = {
    name: string
    status: "completed" | "pending"
}

let todo: Todo = {
    name: "Learn TypeScript",
    status: "completed"
}



//You can also union 2 or more types using the | operator.
type Cat = {
    name: string;
    purrs: boolean;
}

type Dog = {
    name: string;
    barks: boolean;
}

type Pet = Cat | Dog;

let pet1: Pet = {
    name: "Whiskers",
    purrs: true
}

let pet2: Pet = {
    name: "Rover",
    barks: true
}