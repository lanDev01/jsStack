const user = {
    firstName: 'Alan',
    lastName: 'Gonçalves',
    full_name: 'Alan Gonçalves',
    age: 19,
    instagram: '@_juninhoo011',
    skills: ['Front-end', 'Mobile', 'UI/UX']
}

// Rest (resto) Operator
const {firstName, skills, ...rest} = user ;
// o rest operator tem que ser o ultimo parametro a ser passado

const [primary, ...restSkills] = skills

console.log(rest)
console.log(restSkills)