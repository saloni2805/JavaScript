const user = {
    name: "saloni",
    address: "sangli",
    getUserDetails: function () {
        console.log(`Details: ${this.name}`)
    }
}

console.log(user.getUserDetails())