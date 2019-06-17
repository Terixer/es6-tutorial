//Object deconstruction
const person = {
    name: "Andrew",
    age: 27,
    location: {
        city: 'Philadelphia',
        temperature: 88
    }
}


// const { name, age } = person
// console.log(`${name} is ${age}`)
// console.log(`${person.name} is ${person.age}`)


// const { lastName = 'Annonymous', age } = person  //Można też nadać mu defaultową wartość
// console.log(`${lastName} is ${age}`)




const { temperature: myTemp, city } = person.location
if (city && myTemp) {
    console.log(`It's ${myTemp} in ${city}`)
}

