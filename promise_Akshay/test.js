const cart = ["shoes", "pant", "kurta"];

// here create order function take a callback function as an argument and we do not have
// control that the payment method will be called or not
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

// Now in case of Promise object we have control of our program with us
// createOrder api will do our job it will filled with data and automatically our program will called
// and promise to called our program at least once

// here we are attaching the callback function with api

// recommended
// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     return updateWalletBalance(paymentInfo);
//   });

// we can also chain the promise(above example)

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    //proceedToPayment(orderId);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function (orderId) {
    console.log("No matter what happens, I will definitely be called");
  });

// Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createorder
    //validatecart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}

function validateCart(cart) {
  return true;
}
