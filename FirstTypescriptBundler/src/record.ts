type Person = {
    name: string
    age: number
}


// type PeopleGroupedByName = {
//     [key: string]: Person[]
// }



type PeopleGroupedByName = Record<string, Person[]> 