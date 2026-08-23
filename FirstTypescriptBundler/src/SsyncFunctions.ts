// This function takes a duration in milliseconds and returns a Promise that resolves to a string "Hi" after the specified duration.
function wait(duration: number): Promise<string> {
    // Creating a new Promise that will resolve after the specified duration
    return new Promise<string>(resolve => {
        // Using setTimeout to delay the execution of the resolve function
        setTimeout(() => resolve("Hi"), duration);
    });
}

// Calling the wait function with a duration of 1000 milliseconds (1 second)
wait(1000).then(value => {
    // Logging the length of the resolved string "Hi" to the console
    console.log(value.length); // Output will be 2 since "Hi" has 2 characters
});