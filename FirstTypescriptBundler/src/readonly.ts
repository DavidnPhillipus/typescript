type Person = {
    id:  number;
    name: string;
    age: number;
}

const person: Readonly<Person> = {
    id: 1,
    name: 'John',
    age: 30
};


// person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.


type NumerArray = readonly number[];

const nums: NumerArray = [1, 2, 3, 4, 5];   
// nums.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.