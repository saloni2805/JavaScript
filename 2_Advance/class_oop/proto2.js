// let herosName = {
//     name: "Ironman",
//     power: "Full"
// }

// Object.prototype.saloni = function () {
//     console.log(`Saloni is here...`)
// }

// herosName.saloni();

// Modern Syntax

// Object.setPrototypeOf(xyz, yzx)

let anothername = 'saloni   '

String.prototype.truelength = function () {
    console.log(`True length is : ${this.trim().length}`)

}
anothername.truelength()
