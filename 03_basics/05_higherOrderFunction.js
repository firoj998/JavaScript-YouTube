// passing function as a argument (Higher order function example)

let lowerCase = function (str) {
  return str.toLowerCase();
};
let upperCase = function (str) {
  return str.toUpperCase();
};

let transformation = function (str, func) {
  return func(str);
};

//console.log(transformation("Hello coders!", upperCase));

//function returning another function

let compliment = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
   // return true;
  };
};
//console.log(compliment("you are a good coder")("sam"));

//2nd method 

let complimented = compliment("you are a good coder");
console.log(complimented("Firoj"));

// compliment is higher order function


