// Higher Order function by Akshay

// find the area of circles radius are given

// const radius = [2, 3, 4, 5];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

// Circumferenec

// const calculateCircumference = function () {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircumference(radius));

// // Diameter

// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radius));

// lots of repetition of code
// so lets follow the DRY RULE -> don't repeat your self

const radius = [2, 3, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

// console.log("Area of Circles", calculate(radius, area));
// console.log("Circumference of Circles", calculate(radius, circumference));
// console.log("Diameter of Circles", calculate(radius, diameter));

//******************** map filter and reduce -> higher order functions */

// map  used to transform of an array

const arr = [5, 1, 3, 2, 6];

// double = [10,2,6,4,12]

//triple - [15,3,9,6,18]

//Binary - ["101","1","11","10","110"];

function double(x) {
  return 2 * x;
}

const output = arr.map(double);
// console.log(output);

const output2 = arr.map(function (x) {
  return 3 * x;
});
//console.log(output2);

const binOutput = arr.map((x) => x.toString(2));

//console.log(binOutput);

// filter method

const oddValues = arr.filter(function (x) {
  return x % 2 !== 0;
});
// console.log(oddValues);

// reduce method

const arr1 = [4, 3, 5, 6, 7];

// sum or max

function findSum(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  return sum;
}
// console.log("sum of arr1", findSum(arr1));

const output3 = arr1.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

// console.log("sum of arr1 using reduce method", output3);

// find max

const max = arr1.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

// console.log("max number is: ",max);

// Examples------------

const user = [
  { firstName: "Mohd", lastName: "Firoj", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Deepika", lastName: "Padukone", age: 26 },
];

//
const fullName = user.map((item) => item.firstName + " " + item.lastName);

console.log("fullName ", fullName);

// acc = {26:1, 75:1,50:1}
const ans = user.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("age", ans);

// find the firstName whoes age is below 30
// [ 'Mohd', 'Deepika' ]

const name = user.filter((item) => item.age < 30).map((x) => x.firstName);
console.log(name);

// solution using reduce method

const name1 = user.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(name1)  //  same result  [ 'Mohd', 'Deepika' ]