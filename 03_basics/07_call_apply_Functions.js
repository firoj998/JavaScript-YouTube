"use strict";
// Function

// call and apply method
// we can manually set the value of "this" keyword using "call" and "apply"

let mainPlain = {
  airLine: "Fly India",
  iataCode: "FI",
  Bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} Booked flight on ${this.airLine} with flight Number ${this.iataCode} ${flightNum}`
    );
    this.Bookings.push({
      flightName: `${this.airLine}`,
      name: name,
      flightNum: `${this.iataCode}${flightNum}`,
    });
  },
};

mainPlain.book(553, "Carlos");
//console.log(mainPlain);
mainPlain.book(663, "Jack");
//console.log(mainPlain.Bookings);

// New Airline launched of same group

let childPlain = {
  airLine: "child Plain",
  iataCode: "CA",
  bookings: [],
};

let book = mainPlain.book;

//book(665,"lurie");   // book is regular function

// "this".value is undefined at least in strict mode

//Solution using call method :--> it can put it into with respect to any ones context of Object

book.call(childPlain, 990, "sam");
console.log(childPlain)
//console.log(childPlain.bookings)


//apply method

book.apply(childPlain,[786,"Firoj"]);
console.log(childPlain)
