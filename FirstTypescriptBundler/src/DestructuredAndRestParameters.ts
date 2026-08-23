type Options = { deBugMode?: boolean}

// function printNameAndAge(name, {deBugMode = false}={}) {
//     console.log(name , deBugMode);
    
// }//This is how you do the destructuring of the parameters in javascript


// function printNameAndAge2(name: string, {deBugMode = false}: Options = {}) {
//     console.log(name , deBugMode);
    
// }//This is how you do the destructuring of the parameters in typescript


type Options1 = { deBugMode?: boolean, indentLevel?: number}


function printNameAndAge2(name: string,
     {deBugMode = false, indentLevel}: Options1 = {}) {
    console.log(name , deBugMode);
    
}






printNameAndAge2("Kyle", {deBugMode: true});





//How the rest parameters work in typescript
function printNameAndAge3(name: string, ...options: Options[]) {
    console.log
}


