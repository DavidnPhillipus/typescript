type Todo =  {
    title:string
    priotity: "High" |  "Normal" | "Low"
    isCompleted: boolean
    description?: string
    dueDate: Date | string 


}

function extendTodo( todo: Todo){

    switch (todo.priotity){
        case "High":
            console.log("High")
            break
        case "Normal":
            console.log("Normal")
            break
        case "Low":
            console.log("Low")
            break

        default:
            const x: never = todo.priotity
            console.log(x)
            break
    }
    

}

