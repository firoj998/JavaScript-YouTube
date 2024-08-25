// closure

// functions along with its lexical scope bundled together
// forms closure

function z() {
  var b = 1000;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

// Interview Questions (write a program that print 1 to 5 , print 1 after 1 sec, 2 after 2sec an so on..)

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x(); // it will print 6 6 6 6 6

// correct way 1 using let

// function x() {
//     for (let i = 1; i <= 5; i++) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//   }
  
//   x();     // 1 2 3 4 5

  // 2nd way by closure

  function x() {
    for (var i = 1; i <= 5; i++) {
      function close(i){
        setTimeout(function () {
            console.log(i);
          }, i * 1000);
      }
      close(i)
    }
    console.log("Hello")
  }
  
  x();

