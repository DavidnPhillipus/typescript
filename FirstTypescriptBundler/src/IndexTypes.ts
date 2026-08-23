type Person = {
    name: string,
    skillLevel: "beginner" | "intermediate" | "advanced"
}

const person: Person = { name: "John", skillLevel: "intermediate" }
printSkillLevel(person.skillLevel)


function printSkillLevel(skillLevel: Person["skillLevel"]) {
    console.log(skillLevel)
}


type PeopleGroupedBySkillLevel = {
    [index in Person["skillLevel"]]: Person[]
}




const a = ["soft", "skills", true]

type A = (typeof a)[number]
