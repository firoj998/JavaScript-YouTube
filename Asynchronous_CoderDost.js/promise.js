// Promise General Example
let getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve("Some Data"); // dummy
    //reject("some error");
  });
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Fetching data using promise

let todos = (resource) => {
  return new Promise((resolve, reject) => {
    // Making HTTP Request (Example)
    let request = new XMLHttpRequest();
    //console.log(request, request.readyState);

    request.addEventListener("readystatechange", () => {
      // console.log(request,request.readyState);
      if (request.readyState === 4 && request.status == 200) {
        //   console.log(request, request.responseText);
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        // console.log("data could not fetched");
        reject("Error in fetching");
      }
    });

    // set up the request
    // request.open("GET", "https://jsonplaceholder.typicode.com/todos");

    request.open("GET", resource);

    // sending the request

    request.send();
  });
};

// todos("data.json")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Chaining of promises

todos("data.json")
  .then((data) => {
    console.log("Promise 1 resolved ", data);
    return todos("lurie.json");
  })
  .then((data) => {
    console.log("Promise 2 Resolved ", data);
    return todos("mario.json");
  })
  .then((data) => {
    console.log("Promise 3 Resolved ", data);
  })
  .catch((error) => {  // Only one catch method enough to catch any
    console.log(error);
  });
