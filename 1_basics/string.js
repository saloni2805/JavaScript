// String Methods

const gameName = new String("sal-on-i")

console.log(gameName[0])
console.log(gameName.length)
// ==> 6
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("i"))
// ==> 5
console.log(gameName.substring(0, 3))
// ==> s,a,l
console.log(gameName.slice(2, 4))
console.log(gameName.split("-"))
// ["sal","on","i"]

let newDate = new Date()
console.log(newDate.getMonth() + 1)
