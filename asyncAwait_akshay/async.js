// async function always return a promise
// creating a promise
const p = new Promise((resolve, reject) => {
  resolve("Promise p resolved");
});

//returning a normal data through async fn -> data will be
// wrap inside the promise and returned as promise

async function getData() {
  //   return "Hello";   // returning a data
  return p; // returning promise
}

const dataPromise = getData();
//console.log(dataPromise);  // promise

// dataPromise.then((res) => {
//   console.log(res);
// });

// Handling promise using await
// await can only be used inside an async function
async function handlePromise() {
  const val = await p;
  console.log(val);
}

//handlePromise();

//*********  scenario based  interview questions */

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved Values!!");
  }, 10000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved Values!!");
  }, 5000);
});

async function HandlePromise1() {
  console.log("Hello World!");
  const val1 = await p2;
  console.log("Hello JavaScript");
  console.log(val1);

  const val2 = await p3; // this promise has resolved in 5 sec but still have to wait for 10 sec
  console.log("Hello JavaScript2");
  console.log(val1);
}
// HandlePromise1();

// Real Life Example

const API_URL = "https://api.github.com/users/akshaymarch7";

async function HandlePromise2() {
  try {
    const data = await fetch(API_URL);
  const val = await data.json();
  console.log(val)
  } catch (error) {
    console.log(error)
    
  }
}

HandlePromise2();