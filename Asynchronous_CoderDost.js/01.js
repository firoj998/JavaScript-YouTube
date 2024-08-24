// Asynchronous javascript

//Async code example

// console.log(1);
// console.log(2);
//async code
// setTimeout(() => {
//   console.log("call back function called after 3 seconds");
// }, 3000);

// is this code block execution for 3 sec? => NO

// console.log(3);
// console.log(4);

//******************* */
// CallBack function

let todos = (resource, callBack) => {
  // Making HTTP Request (Example)
  let request = new XMLHttpRequest();
  console.log(request, request.readyState);

  request.addEventListener("readystatechange", () => {
    // console.log(request,request.readyState);
    if (request.readyState === 4 && request.status == 200) {
      //   console.log(request, request.responseText);
      let data = JSON.parse(request.responseText);
      callBack(undefined, data);
    } else if (request.readyState === 4) {
      // console.log("data could not fetched");
      callBack("Data could not fetched", undefined);
    }
  });

  // set up the request
  // request.open("GET", "https://jsonplaceholder.typicode.com/todos");

  request.open("GET", resource);

  // sending the request

  request.send();
};

// Async Code example

// Chain of todos function (callback) => callback hell
todos("data.json", (err, data) => {
  // will take some time
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  todos("mario.json", (error, Data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(Data);
    }

    todos("lurie.json", (error, Data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(Data);
      }
    });
  });
});

// value state Description

// 0  UNSENT Client has been created. open() not called yet.
// 1 OPENED open() has been called
// 2 HEADERS_RECEIVED   send() has been called, and headers
// 3 LOADING Downloading; responseText holds partial data.
// 4 DONE  the operation is complete.  // interested here

// HTTP response status code

// Informational response (100 - 199)
// successful response (200 - 299)
// Redirection messages (300 - 399)
// Client error response (400 - 499)
// Server error response (500 - 599)
