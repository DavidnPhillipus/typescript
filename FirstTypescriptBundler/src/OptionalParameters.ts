function printNameAndAge(name: string, age?: number) {
    console.log(`Name: ${name}`);
    if (age) {
        console.log(`Age: ${age}`);
    }
}

printNameAndAge("Kyle");//This will not output the age because we did not pass the age parameter
printNameAndAge("Kyle", 19);//This will output the age because we passed the age parameter