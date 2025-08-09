// Stack => Primitive values
// Heap => Non-Primitive Values


// primitive values

let myName = "Ananya"

let anotherName = myName

anotherName = "Anna"

console.log(anotherName);
console.log(myName);

// objects(non-primitive values)

let userOne = {
    email: "ananya@xyz.com",
    upi: "ananya@ybl"
}

let userTwo = userOne

userTwo.email = "ananya@sbi"

console.log(userOne.email);
console.log(userTwo.email);



// Stack stores the copy
// Heap stores the refernce