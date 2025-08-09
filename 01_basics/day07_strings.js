const name = "ananya"
const repoCount = 50

// console.log(name + repoCount + " Value");    (outdated version)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation

const gameName = new String('ananya-as-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 4)
console.log(anotherString);

const newStringOne = "   ananya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ananya.com/ananya%20saini"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));