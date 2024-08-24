let hotel = {
    name: "Hottell",
    Location: "street no xyz Delhi",
    categories: ["Chinease", "Italian", "English"],
    mainMenu: ["FoodA", "FoodB", "FoodC"],
    starterMenu:["specialFoodA","specialFoodB"],
    openingHours: {
      sunday: { open: "09:00AM", close: "11:00PM" },
      monday: { open: "10:00AM", close: "10:00PM" },
    },
  };

  let menu = [...hotel.mainMenu, ...hotel.starterMenu];
   
// If only value

//   for(let ele of menu) console.log(ele);

// If we want both index as well as value
for(let [i,item] of menu.entries()){
    console.log(`${i+1}:${item}`)
}



