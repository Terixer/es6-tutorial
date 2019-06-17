//Array destructing

// const address = ['Sobieskiego', "Warszawa", "Mazowieckie", "11-111"]
// const [ulica, miasto, state] = address;

// console.log(`You are in ${state}, ${ulica}, ${miasto}`)


const address = ['Sobieskiego', "Warszawa", "Mazowieckie", "11-111"]
const [, , state] = address;

console.log(`You are in ${state}`)