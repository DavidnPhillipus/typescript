// The 'any' type in TypeScript is a type that can hold any value.
// It is useful when you don't know the type of a variable in advance or when you want to opt-out of type checking.

let dynamicVariable: any;

// Assigning a number to the variable
dynamicVariable = 42;
// dynamicVariable is now a number

// Assigning a string to the same variable
dynamicVariable = "Hello, world!";
// dynamicVariable is now a string

// Assigning an object to the same variable
dynamicVariable = { key: "value" };
// dynamicVariable is now an object

// Assigning an array to the same variable
dynamicVariable = [1, 2, 3];
// dynamicVariable is now an array

// Assigning a function to the same variable
dynamicVariable = function() {
    console.log("This is a function");
};
// dynamicVariable is now a function

// Using 'any' type can be risky because it bypasses type checking
// It's generally better to use more specific types when possible