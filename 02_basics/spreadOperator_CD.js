// Spread Operator (Unpacking of array elements)

// Spread(...) operator It is present in the RHS of = 
let hotel = {
    name: "Hottell",
    Location: "street no xyz Delhi",
    categories: ["Chinease", "Italian", "English"],
    mainMenu: ["FoodA", "FoodB", "FoodC"],
    openingHours: {
      sunday: { open: "09:00AM", close: "11:00PM" },
      monday: { open: "10:00AM", close: "10:00PM" },
    },
  };
  

  let nums = [2,3,4,5]
//   console.log(...nums);
  let newArray = [9,10,...nums];
//   console.log(newArray)

  let updatedMainMenu = [...hotel.mainMenu,"FoodD","FoodE"];
//   console.log(updatedMainMenu);

  // join 2 arrays
   let joinedArray = [...nums,...newArray];
//    console.log(joinedArray)

// Create shallow copy using spread operator

let copyArray = [...updatedMainMenu]
copyArray[1] = "updatedFood";
console.log(copyArray)
console.log(updatedMainMenu);

// We can also use spread operator on Strings

let passion = "Programming"
console.log(...passion);

// syntax of REST(...) Get elements and packed them into array
// Use in LHS

let [a,b,...others] = nums;
console.log(others)

let {sunday,...weekDays} = hotel.openingHours;
console.log(sunday,weekDays)


// Nullish coalesing operator (??) only "null" and "undefined" are falsy value

// let numGuests = 0;
let numGuests = null; 
let result = numGuests ?? 10;
console.log(result);  // 0 is not nullish value  for null it will assign to its value
