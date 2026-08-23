function checkLength(a: string, b: number){
    return a.length < b
}


type ReturnOfLengthCheck = ReturnType<typeof checkLength> // boolean
type ParametersOfLengthCheck = Parameters<typeof checkLength> // [string, number]
