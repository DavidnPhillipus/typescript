let a: number = 5; 
let b: string = "Hello, World!";


function useVariables( num: number, str: string ): void {
    console.log(`Number: ${num}, String: ${str}`);
}

useVariables(a, b);


// // null vs undefined
// let c: null = null;
// let d: undefined = undefined;
// c = null; // valid
// d = undefined; // valid
// d = null; // invalid, Type 'null' is not assignable to type 'undefined'.
