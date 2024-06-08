// Primitive

// 7 types:Strin, Number,Boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 3.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id===anotherID)


//Reference Non-primitive

// Arrays, Objects, Functions

const heroes = ["Shaktiman","naagraj","doga"];
let myObj = {
    name:"Himanshu",
    age:18,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log("HELLO WORLD")