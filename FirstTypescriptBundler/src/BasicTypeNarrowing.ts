type Todo =  {
    title:string
    priotity: "High" |  "Normal" | "Low"
    isCompleted: boolean
    description?: string
    dueDate: Date | string 


}

function extendTodo( todo: Todo){
    console.log(todo.dueDate)
    if(typeof todo.dueDate === "string"){
        console.log(todo.dueDate)
    }



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
    }
}

const form = document.querySelector("form")
form?.addEventListener("submit", () => {})
form!.addEventListener("submit", () => {})








