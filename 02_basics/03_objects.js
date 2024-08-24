// singleton
// Object.create

// Object Literals
// ********* Define a Symbol and add that symbol as a key in objects keys and print (Interview Question)********---

const mySym1 =  Symbol("Key1")

const JsUser = {
    name:"Firoj",
    "fullName":"Mohd Firoj",
    age:25,
    email:"firojgmail.com",
    location:"Gonda",
    [mySym1]:"Key1"
};

console.log(JsUser.name); //
// AnOther way to Access   Keys are stored as a string in Memory.
// console.log(typeof JsUser["name"]);
console.log(JsUser["name"]);  
console.log(JsUser["fullName"]);
console.log(JsUser[mySym1]);
console.log(JsUser);

// Modifying the values of Objects--------

JsUser.email = "firoj@chatgpt.com"
//Object.freeze(JsUser)  //  It will freeze (LOCK) the Object
JsUser.email = "Firojqv@soprasteria.com"  // No changes will done becoz it alreadyy freezed.
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User!");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User! MY name is ${this.fullName}`);
}
console.log(JsUser.greetingTwo());