type Options = {
    debug: boolean
    format: {
        tabs: boolean,
        tabWidth: number
    }
}


function printNumber(num: number, options?: Options){
    console.log(num)

    }
    

printNumber(3)


//@ts-ignore
const thisIsAnEerror : error= 3

//@ts-expect-error
const thisIsAnEerror : error= 3

//@ts-nocheck