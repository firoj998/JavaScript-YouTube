// Maps

// It is data structure which is used to map values into keys
// In map the data type of keys can be of "any"

//Map is much similar to object

let restaurantMap = new Map();

// Adding values into the map

restaurantMap.set("name", "Bombay Hotel");
restaurantMap.set(1, "Address1");
restaurantMap
  .set(2, "Address2")
  .set(true, "we are open today")
  .set(false, "we are close today");
console.log(restaurantMap);

// Getting values
console.log(restaurantMap.get(2));
console.log(restaurantMap.get(true));

// size of map
console.log(restaurantMap.size)