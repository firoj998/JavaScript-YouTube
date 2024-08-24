// Object oriented programming

// Constructor function and "new" Operator

// We can not use "arrow" function as constructor

// call "constructor" function using "new" keyword

// 1 new {object} created empty initially
// 2 "this" = {object}
// 3 object linked to prototype
// 4 function automatically return {object}

let Car = function(color,model){
    // instance properties
    this.color = color;
    this.model = model;
    // not a good practice
    this.login= function(){
        console.log("login method")
    }
}
let instanceOfCar = new Car("Yellow",2021);
let instance = new Car("Blue",2022);
// console.log(instanceOfCar,instance);
// console.log(instance instanceof Car);


// Prototype

// Each object created by "constructor" function have an access
// to all "method" present inside that "constructor" prototype


//Method
Car.prototype.startEngine = function(){
    console.log("this is start engine method")
}

// we can also set "properties" to prototype
Car.prototype.company = "Honda"


let instanceOfCar2 = new Car("white",2022);
let instance2 = new Car("Black",2023);
//console.log(instanceOfCar2,instance2);
//console.log(instance2 instanceof Car);
instanceOfCar2.startEngine();
 
console.log(instance2.__proto__);
console.log(instance2.__proto__.isPrototypeOf(instance));

// It is same as well
console.log(Car.prototype)
console.log(Car.prototype.isPrototypeOf(Car));  // false

// Car.prototype is prototype of all objects created through the car constructor


let arr = [2,3,4,5,6]; // [] is same as new Array([])

console.log(arr.__proto__.__proto__);  // chaining of prototype
console.log(Array.prototype);
