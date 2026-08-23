let a = 1 as const

const nums = ["1", "2", "3"] as const
//This converts the array to a readonly tuple


const SKILL_LEVELS = [ "Beginner", "Intermediate", "Advanced"] as const

type Person = {
    skillLevel: typeof SKILL_LEVELS[number]
}


SKILL_LEVELS.forEach(skillLevel => {
    console.log(skillLevel)
})

