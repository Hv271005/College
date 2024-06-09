const name1 = "Himanshu"
const repoCount = 50

console.log(`Your name is ${name1} and your repocount is ${repoCount}`)



const arrName=["Himanshu","Abhay","Nikhil","Mayank","Kartik"]
const repocount=[50,10,80,20,60]

for(let i = 0 ;i <  5;i++)
    {
        console.log(`Your name is ${arrName[i]} and your repocount is ${repocount[i]}`)
    }


const gamename = new String ('Himanshu')
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(5))
console.log(gamename.indexOf('m'))

const newString = gamename.substring(2,6)
console.log(newString)

const anotherString = gamename.slice(2,5)
console.log(anotherString)

const newStringOne = "    Himanshu    "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://google.com%20hello"
console.log(url)
console.log(url.replace('%20',' '))

const name = "Himanshu"
console.log(name.blink())