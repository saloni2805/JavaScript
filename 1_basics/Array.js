let myArray = [0, 1, 2, 3, 4, 5]

// const myn1 = myArray.slice(1, 3)
// console.log(myn1)
console.log("A", myArray)
const myn1 = myArray.slice(1, 3)
console.log("C", myArray)
console.log(myn1)

console.log("B", myArray)
const myn2 = myArray.splice(1, 3)
console.log("C", myArray)
console.log(myn2)

// Splice manipulates original array where as slice doesnt affect original array


let score1= 100;
let score2=300;
let score3= 500;

const Arraayy=(Array.of(score1,score2,score3))
console.log(Arraayy)