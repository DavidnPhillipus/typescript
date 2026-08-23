type Todo ={
    title: string;
    dueDate: Date | string;
    isCompleted: boolean;
}

const todo = {
    title: "Clean the house",
    dueDate: new Date(),
    isCompleted: false
} satisfies Todo


todo.dueDate.setDate(4) 
