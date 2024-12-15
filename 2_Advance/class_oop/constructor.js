// Constructor function gives always a new copy or instance
// That's why "new" is used otherwise values will override  
// After writing new keyword new instance gets created or you can say empty object
// Bcz of new Keyword constructor function gets called

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new User('saloni', 1, true);
const userTwo = new User('sarika', 2, true);

console.log(userOne);
console.log(userTwo.username);