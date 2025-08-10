// two ways:
// literals - no singleton 
// constructors - singleton


const mySym = Symbol("key1")


const JsUser = {
    name: "Ananya",
    "full name": "Ananya Saini",
    [mySym]: "mykey1",
    age: 18,
    location: "Dehradun",
    email: "ananya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ananya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ananya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

