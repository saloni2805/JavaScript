let mySymbol = Symbol("Hey")

// Object Literals (non-singleton)
const Objectt = {
  name: "saloni",
  [mySymbol]: "Heyw",
  address: "Sangli",
  email: "salonispotdar@gmail.com",
}

// console.log(Objectt.name)
// console.log(Objectt["email"])
// console.log(Objectt[mySymbol])

// Object.freeze(address) // Freezs the value,we can not change the value

Objectt.greeting = function () {
  console.log(`Hiii, ${this[mySymbol]}`)
}

console.log(Objectt.greeting())
