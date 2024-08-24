const accountID = 12343;
let accountEmail = "firoj@gmail.com"
var accountPass = "643267466"
accountCity = "Lucknow"
//accountID = 7234;
console.log(accountID)
accountEmail = "firojmohd@mgail.com";
accountPass = "hello";
accountCity = "Gonda";
let accountState;    // undefined

/*
prefer not to use var because of issue of block scope 
and function scope.
*/

console.table([accountID,accountEmail,accountPass,accountCity,accountState]);