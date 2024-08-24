// Enhanced Object literal
// Before ES6 Vs After ES6

// We can use computed property name

let openingHours = {
  sunday: { open: "09:00AM", close: "11:00PM" },
  monday: { open: "10:00AM", close: "10:00PM" },
};

let menuType = "platinumMenu";
let hotel = {
  name: "Hottell",
  Location: "street no xyz Delhi",
  categories: ["Chinease", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  starterMenu: ["specialFoodA", "specialFoodB"],
  openingHours,
  order() {},
  [menuType]: ["Different Food items ...."],
};
// console.log(hotel);


// Optional Chaining (?.)

// scenario=> Let suppose we want to check this hotel open on Saturday or NOT
// If open then at what time

//console.log(hotel.openingHours.saturday.open);  // undefined
// TypeError: Cannot read properties of undefined (reading 'open')

// To avoid this error two methods

// without optional chaining
if(hotel.openingHours && hotel.openingHours.saturday){
    console.log(hotel.openingHours.saturday.open)
}

// With option chaining
console.log(hotel.openingHours?.saturday?.open)

// check previous value of the operator => null or undefined
// return undefined



//************************************  Looping on Objects */
// (Object_keys, values, entries)

// Objects are non-iterables but indirectly we can ...

// Keys(Properties)

let properties = Object.keys(openingHours);
console.log(properties)   // return array
// we know how to loop over Array
 for(let key of properties){
    console.log(key)
 }


 // Values

 let values = Object.values(openingHours);
 console.log(values)


 // complete objects

 let entries = Object.entries(openingHours);
 console.log(entries);

 for(let[day,{open,close}] of entries ){
    console.log(`On ${day} we open at ${open} and close at ${close}`)
 }