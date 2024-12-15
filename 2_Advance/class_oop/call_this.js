function setUsername(username) {
    this.username = username;
}

function createUsername(username, email, pass) {
    setUsername.call(this, username);
    // setUsername will use 'this' declared with call so, when setUsername will go out of execution context it gives it value to that 'this' with call, which has current context
    this.email = email;
    this.pass = pass;
}

let user = new createUsername("saloni", "ssp@gmail.com", "nejn345")
console.log(user)