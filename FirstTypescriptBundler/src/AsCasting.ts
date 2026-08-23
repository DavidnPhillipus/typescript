type Todo = {
    title: string;
    
}




fetch("rigor").then(res => res.json()).then(data => {
    return data as Todo;
}).then(todo => {

})

