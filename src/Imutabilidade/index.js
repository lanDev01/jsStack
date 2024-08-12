const user = {
    firstName: 'Alan',
    lastName: 'Gonçalves',
    age: 19,
    instagram: '@_juninhoo011',
    skills: ['Front-end', 'Mobile', 'UI/UX'],
    active: false
}

// Spreed (espalhar) operator
const updatedUser = {
    ...user,
    skills: [...user.skills, 'Back-End'],
    active: true
}

console.log({user})
console.log({updatedUser})