type Todo = {
    title: string;
    completed: boolean;
}


const todo = {
    title: 'Delete inactive users',
    completed: false
} as const

type Test = typeof todo; // {readonly title: "Delete inactive users", readonly completed: false}

type Test2 = Readonly<typeof todo>; // {readonly title: "Delete inactive users", readonly completed: false}
