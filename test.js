const a = [
    {
        name: {
            firstName: "anas",
            lastName: "hesham"
        },
        age:3
    },
    {
        name: {
            firstName: "anas",
            lastName: "hesham"
        },
        age:3
    }
]
const v = [
    {
        name: {
            firstName: "anas",
            lastName: "hesham"
        },
        age:3
    },
    {
        name: {
            firstName: "anas",
            lastName: "hesham"
        },
        age:3
    }
]
function matchPersons(targetedPersons, persons) {
    for(let index in targetedPersons) {
        if(!matchPerson(targetedPersons[index], persons[index])) {
            return false
        }
    }
    return true
}
function matchPerson(targetedPerson, person) {
    if(targetedPerson.age !== person.age) {
        return false
    }
    if(!matchName(targetedPerson.name, person.name)) {
        return false
    }
    return true
}
function matchName(targetedName, name) {
    if(targetedName.firstName !== name.firstName) {
        return false
    }
    if(targetedName.lastName !== name.lastName) {
        return false
    }
    return true
}