class User {
    constructor(username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    userPass() {
        return (`${this.pass} is pass`)
    }
}

const newUser = new User('ssp', 'sssspppp', '5876')

console.log(newUser.userPass())