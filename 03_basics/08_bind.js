function greet() {
  console.log(`welcome ${this.firstName} ${this.lastName} on Coder Dost`);
}

let user = {
  firstName: "Mohd",
  lastName: "Firoj",
};
let greets = greet.bind(user);

greets();