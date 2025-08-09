//Dates

myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.getTimezoneOffset());
console.log(typeof myDate); //object

let myCreatedDate = new Date(2025, 5, 1, 5, 3, 4)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp / 1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})