function createUser(username, pass) {
    this.username = username;
    this.pass = pass;
}

createUser.prototype.increament = function () { this.pass++ }
createUser.prototype.printMe = function () { console.log(`price is ${this.pass}`) }

const user1 = new createUser('salonii', 223)

user1.printMe()