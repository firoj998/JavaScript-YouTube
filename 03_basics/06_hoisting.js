// Hoisting
// variable "declaration" are "hoisted" toward top of their scope

age=18;
console.log("value of var is",age);
var age;

// age=18;
// console.log("value of var is",age);   // will throw an error for let and const
// let age;


// function declaration  
// Normal function declaration can be called before initialization   : Reason ---> Hoisting

// Above concepts is not true for Not function expression and arrow functions

greeting();
function greeting(){
    console.log("hello Good Morning!");
    
}

// Not function expression and arrow functions

// greeting();
// const greeting =()=>{
//     console.log("hello Good Morning!");
    
// }