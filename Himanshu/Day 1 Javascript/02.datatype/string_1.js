let space = ' '
let firstName = 'Himanshu'
let lastName = 'Verma'
let country = 'India'
let city = 'Kanpur'
let age = 18
let language = 'Javascript'
let job = 'Student'

let fullName = firstName + space + lastName
console.log(fullName)

let personInfoOne = fullName+'.\n I am ' + age + '.\nI live in '+country

console.log(personInfoOne)


let personInfotwo = `I am ${fullName}. I am ${age}. I live in ${country}.`

let personInfoThree  = `I am ${fullName}. I am ${age}. I live in ${city},${country}. I am a ${job}.I teach ${language}.`
 
console.log(personInfotwo)
console.log(personInfoThree)