type Todo = {
    id: string
    name: string
    completed: boolean
}

// type NewTodo ={
//     name: string
//     completed: boolean
// }

type newTodo = Pick<Todo, 'name' | 'completed'>
type TodoPreview = Omit<Todo, 'id'>

function saveTodo (todo: Todo){
    todo.id = crypto.randomUUID()
    return todo
}


function renderTodo (todo: Todo){
    const div = document.createElement('div')
    div.id = todo.id
}