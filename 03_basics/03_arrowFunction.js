const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

 //chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


//  chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2     // "  Called Implicit Return"   ** single line return statment so no need to write return keyword.**

// const addTwo = (num1, num2) => ( num1 + num2 )       // OR we can wrap this into a parenthesis and NO return Keyword.***

 const addTwo = (num1, num2) => ({username: "Firoj"})   // Returning Object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
