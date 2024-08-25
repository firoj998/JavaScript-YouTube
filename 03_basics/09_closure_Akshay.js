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
