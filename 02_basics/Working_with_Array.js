// Working with Array (Simple Methods)

let letters = ["a", "b", "c", "d", "e"];

// Reverse (mutate the original arrays)

// let reverse = letters.reverse();
// console.log(reverse);
// console.log(letters);   // original array also changed

//concat
let nums = [1, 2, 3, 4];

let concated = nums.concat(letters);
// console.log(concated);

//join

let joined = letters.join("-"); // join method takes separator as arguments  comma (",")  by default AND return type is String
// console.log(joined)
// console.log(typeof(joined));

// slice

// used to extracted part os array
//Array.slice(startIndex, lastIndex (excluded))
// return new array of extracted element

let nums2 = [3, 4, 5, 67, 8, 9];
let extracted = nums2.slice(1, 3);
// console.log("extracted elements:", extracted);
// console.log("original array:", nums2);

//splice method    (mutate the original array)

// used to add new elements into array
//Array.splice(index,deleteValueIndex, valueTobeAdded)
// Return deleted items in the form of array

let num = [3, 5, 7, 9, 2];
let updated = num.splice(1, 0, 1, 4);
// console.log("original Array = ", num);
// console.log("Returned Element Array = ", updated);

// at Method

let nums3 = [23, 4, 5, 758, 65, 45, 3];
//console.log(nums3[0]);
//console.log(nums3.at(1));

//getting the last element of array

//console.log(nums3[nums3.length - 1]);

//console.log(nums3.slice(-1)[0]);
//console.log(nums3.at(-1));   // easiest format

// at method can also work on Strings
let name = "Harry";
//console.log(name.at(-1));

// ********************** Higher Oder Functions **********************************

// Map Method

// Create New array from original array by applying transformation function
let salary = [3000, 5000, 6000, 8000];
let newSalary = salary.map((salary) => {
  let incrementedAmount = salary / 2;
  return incrementedAmount + salary;
});

//console.log("After 50% bonus new salary are ", newSalary);

//Length of new array- always "equal" to original array
//*************** */
//filter Method(used to perform filtration on Array)

let gifts = ["Watch", "Ring", "Chocolates", "Teddy-Bear", "Ring"];

let filteredArray = gifts.filter((gift) => {
  if (gift == "Watch" || gift == "Ring") {
    return gift;
  }
});
//it return "new" arrayF
// console.log(filteredArray);
// console.log(gifts);

// Imp Note
// length of new array may or may not ne same as original array

//******************************** */

// reduce Method

// Run reducer function for each array element
//Array.reduce(function(total,currentValue),initialValue)
// it return single value

// sum of all elements using reduce method
let numbers = [1, 2, 4, 5, 6, 9];
let sum = numbers.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);
//console.log(sum);

// does not mutate the original array

//console.log(numbers);

// "find" Method
// It return the "first" element we are looking for..........

let students = [
  { id: 1, name: "alex" },
  { id: 2, name: "john" },
  { id: 3, name: "peter" },
];
let result = students.find((student) => {
  return student.id == 1;
});
// console.log(result);

//findIndex Method

// Execute function for each array element
//it return "index" of that element who "first" pass the test "otherwise" -1

let ages = [12, 24, 45, 6, 57, 7, 4, 90];
let result2 = ages.findIndex((age) => {
  return age > 10;
});
//console.log("index of required age ", result2);

//"Some" and "every" method

//some method return "true" if "any" array element pass the test
// every method return "true" if "all" elements pass the test

let score = [25, 34, 67, 80, 92];

let result3 = score.some((score) => {
  return score > 90;
});
//console.log("some method ",result3);
let newScores = [54, 65, 58, 81, 76];
let newResult = newScores.every((score) => {
  return score > 50;
});
//console.log("every method",newResult);

//"flat" method

// it creates a new array with the element of the subarrays
// "concatenated" into it.

let arr = [1, 2, 3, [4, 5]];
//console.log("Before flat ", arr); // No effect on original array(non-mutating)

let res = arr.flat(); // by default 1(depth value) value
//console.log("After flat ", res);

let arr1 = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10]]];
//console.log("After flat", arr1.flat(2));

//******************* */

//flatmap method

// It is the combinations os map() method
// followed by the "flat()" method of depth "1"

let cart = [
  {
    name: "Mobile Phone",
    qty: 2,
    price: 500,
  },
  { name: "Tablet", qty: 1, price: 1000 },
];

let newCart = cart.flatMap((item) => {
  if (item.name === "Mobile Phone") {
    return [
      item,
      {
        name: "Screen Protector",
        qty: 1,
        price: 0,
      },
    ];
  } else {
    return [item];
  }
});
// console.log(newCart);

// sorting array using sort method

//By default sort method is used to sort strings
// It firstly convert everything into string the ............

let letter = ["d", "g", "s", "a", "b"];
//console.log(letter.sort());

let nums5 = [2, 5, 67, 0, -2, -4, -43];
console.log("Unsorted", nums5);
//console.log(nums5.sort()); // Unexpected

// if a-b <0  => a<b =>A,B (keep order same)
// if a-b >0  => a>b =>B,A (switch the order)

// nums5.sort((a,b)=>{
//   if(a<b){
//     return -1  // any num less than 0
//   }
//   if(a>b){
//     return 1 // any num greater than 0
//   }
// })


// ascending order
// nums5.sort((a,b)=>{
//   return a-b;
// })

// Descending order
nums5.sort((a,b)=>{
  return b-a;
})

console.log("Sorted",nums5)