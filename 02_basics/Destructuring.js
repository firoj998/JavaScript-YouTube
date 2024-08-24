// ES6

// Destructuring the Arrays

let hotel = {
  name: "Hottell",
  location: "street NO xyz Delhi",
  categories: ["Chinease", "Italian", "English"],
};

//simple Example
// without

let items = [2, 3, 4, 5];
// let x = items[0];
// let y = items[1];
// let z = items[2];
// let p = items[3];
// console.log(x,y,z,p);

// With Destructuring
let [x, y, z, p] = items;
console.log(x, y, z, p);

//Example2

let [main, , secondary] = hotel.categories;
console.log(main, secondary);

// Switch the category (usecase)
// without destructuring

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// swaping using destructuring

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Destructuring of Nested Arrays

let nums = [2, 3, [6, 8]];
//let[a,,b] = nums;
let [a, , [b, c]] = nums;
console.log(a, b, c);
//************************************* */

// Destructuring of "Objects"

let hotel1 = {
  name: "Hottell",
  Location: "street no xyz Delhi",
  categories: ["Chinease", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "foodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "10:00PM" },
  },
};

// let {name,Location,mainMenu} = hotel1;
// console.log(name,Location,mainMenu)


// Set Customize name to Object property

// let{name:hotelName,Location:hotelLocation,mainMenu:Menu} = hotel1;
// console.log(hotelName,hotelLocation,Menu);

// Setting Default Values

// let {name,Menu:newMenu=[],categories=[]} = hotel1;
// console.log(name,newMenu,categories)


// Destructuring of Nested Objects

let {name,openingHours} = hotel1;
console.log(name,openingHours)

let {sunday:{open,close}} = openingHours;
console.log(open,close);