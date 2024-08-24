function setUserName(username){
    this.username = username;
    console.log("called!");
}

function createUser(username,email, password){
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const user1 = new createUser("firoj", "firoj@google.com",'123');
console.log(user1);