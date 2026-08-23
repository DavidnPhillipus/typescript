type Person =  {
    name: string
}


type Todo ={
    title: string
}

function print(obj: Person | Todo){
    if("name" in obj){
        console.log(obj.name)
        return
    }

    console.log(obj.title)
}


function isPerson(obj: any): obj is Person{
    return "name" in obj
}



const PRIORITIES =["High", "Medium", "Low"] as const
type Priority = typeof PRIORITIES[number]
type Todo1 = {
    title: string
    description: string

}

function func(todo: Todo1){
    if(isPriority(todo.description)){
       todo.description
        
    }else{
        todo.description
    }
}


function isPriority( description: string): description is Priority {
    return PRIORITIES.includes(description as Priority)
}

