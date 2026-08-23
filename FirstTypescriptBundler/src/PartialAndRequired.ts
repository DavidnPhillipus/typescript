type Todo = {
    title: string
    completed: boolean
}

type FormTodo = Partial<Todo>
type RequiredTodo = Required<Todo>


type a = Required<Pick<Todo, 'title'>>
type b = Required<Pick<Todo, 'completed'>>

type c = Partial<Pick<Todo, 'title'>> & Required<Pick<Todo, 'completed'>>   // { title?: string; completed: boolean; }




type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>>//