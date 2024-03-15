const user = {
    firstName: 'Alan',
    lastName: 'Gonçalves',
    full_name: 'Alan Gonçalves',
    age: 19,
    instagram: '@_juninhoo011',
    skills: ['Front-end', 'Mobile', 'UI/UX']
}

// Destructuring
const {firstName, age , skills, full_name: fullName} = user ;

const [primary, secondary] = skills

console.log(fullName)