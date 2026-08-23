function sumWithCallback(a: number, b: number, callback: (result: number) => void) {
    callback(a + b);
}


sumWithCallback(10, 20, result => {
    console.log(result);
});



type PrintNameFunc  =  (name: string) => number

function f(name: string): number {
    return name.length;
}//This is how you define a function in typescript

