class User {
    constructor(username, password) {
        this.usernamee = username;
        this.passwordd = password;
    }


    // name should be same as property name
    get passwordd() {
        return `${this._password}oo`
    }
    set passwordd(value) {
        this._password = value;
    }
}

const userObj = new User('sall', 6357)
console.log(userObj);
console.log(userObj.passwordd);