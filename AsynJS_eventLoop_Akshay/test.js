console.log("start");

setTimeout(function cbt() {
  console.log("CB setTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});
console.log("End");
