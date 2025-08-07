let score = 33 //number

console.log(typeof score);

let score_2 = "33" //string

console.log(typeof score_2);

let valueInNumber = Number(score_2)  //number

console.log(typeof valueInNumber);

let score_3 = "33abc"
let value = Number(score_3) 
console.log(typeof value); //number
console.log(value);  //NaN

//if
let score_4 = null
let x = Number(score_4)
console.log(typeof x); //number
console.log(x); //0

let score_5 = undefined
let y = Number(score_5);
console.log(typeof y); //number
console.log(y); //NaN

let score_6 = true
console.log(typeof score_6); //boolean
let bool = Number(score_6)
console.log(typeof bool); //number
console.log(bool); // 1

let isLoggedIn = 1
console.log(typeof isLoggedIn); // number
let z = Boolean(isLoggedIn)
console.log(typeof z); //boolean
console.log(z); // true

let names = ""
console.log(typeof names); //string
let xyz = Boolean(names)
console.log(typeof xyz); // boolean
console.log(xyz); // false

// 1 => true, 0 => false
//"" => false
//"Ananya" => true


let someNumber = 33
let StringNumber = String(someNumber)

console.log(StringNumber); // 33
console.log(typeof StringNumber); // string