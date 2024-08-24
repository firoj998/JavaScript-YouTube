// Local Storage

// In previous todo list task when we refresh the browser we 
// lose our current state data

// Store and retrieve data from database

// for now our focus is on local storage
// store and retrieve data from local storage

// Is an api provided by browser to store data inside browser

// console.log(localStorage)

// set item
//get item
// update item

// set the item in local storage

localStorage.setItem('passion',"Programming");
localStorage.setItem('age',27);
//console.log(localStorage)


// Get item from local storage

//console.log(localStorage.getItem('age'));

// update

localStorage.setItem("age",28);  // overwrite the previous value
localStorage.setItem("ag",25);
// console.log(localStorage)

// Remove

localStorage.removeItem("ag");
console.log(localStorage)


// not => if we want to store data like objects in local storage then first we need to convert it into String 
// becoz we can only store in String format only
// convert into String using JSON.stringyFy()
// then store and for access reverse the process