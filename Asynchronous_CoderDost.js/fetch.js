// Asynchronous JavaScript

//fetch API

// fetch("data.json").then((response)=>{
// console.log("Promise resolved ", response)
// return response.json()  // returning promise
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
// console.log(error);
// })

// async and await
// aslo non - blocking
let getTodos = async () => {
  let response = await fetch("data.json");
  // custom error
  if (response.status !== 200) {
    throw new Error("Custom:Error in fetching the data ");
  }

  let data = await response.json();
  // returning the data from async await function
  return data;
};

// console.log(1);
// getTodos()
//   .then((data) => {
//     // this is how we handle resolved
//     // promise using then method
//     console.log(data);
//   })
//   .catch((error) => {
//     // handling rejected promise using catch method
//     console.log(error);
//   });
// console.log(2);


// Async Await without return statement

// let suppose we want to get more than one data
  
// Error handling using Try Catch Method
let getTodos2 = async()=>{
    try{
        let response = await fetch("lurie.json");
    let data = await response.json();

    let response2 = await fetch("mario.json");
    let data2= await response2.json();

    // return data;   // we can not return two data at a time;
    // return data2;
    console.log(data,data2);
    }
    catch(error){
        console.log(error.message);
    }
}

// We don't need to chain anything as previously
getTodos2();
  