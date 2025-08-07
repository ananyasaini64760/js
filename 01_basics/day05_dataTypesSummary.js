//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    Name : "Ananya",
    Age : 21,
}

const myFunction = function(){
    console.log("Hello World!");    
}

console.log(typeof myFunction); // function (object function)
console.log(typeof anotherId); // symbol
console.log(typeof heroes); // object
console.log(typeof scoreValue); // number
