class User {
    constructor(username) {
        this.username = username;
    }
    usersInfo() {
        return `${this.username} is my username`;
    }
}

class Teacher extends User {
    constructor(username, name, pass) {
        super(username);
        this.name = name;
        this.pass = pass;
    }
    newTeachersInfo() {
        return `${this.username} and ${this.name} name and ${this.pass}`
    }
}

let userObject = new User('Ssp2')
console.log(userObject.usersInfo()) //Ssp2 is my username

let newTeacher = new Teacher('ssp', 'rhbil', '78659');
console.log(newTeacher.newTeachersInfo()) //ssp and rhbil name and 78659
console.log(newTeacher.usersInfo()) //ssp is my username

console.log(userObject instanceof User) //True
console.log(newTeacher instanceof User) //True



