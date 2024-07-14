function AddTwoNumbers(num1, num2) {
  return num1 + num2
  //   Anything after return doesnt get executed
}
const result = AddTwoNumbers(4, 5)
console.log(result)

// Rest operator is uded to store multiple arguments
// denoted as "..."
// It will make array of all teh arguments

function Cart(...nums) {
  return nums
}
console.log(Cart(200, 300, 300))

// Using Object in Function

const trial = {
  firstname: "salu",
  lastname: "potdar",
}
function fullname(FullName) {
  return `${FullName.firstname} ${FullName.lastname} `
}
console.log(fullname(trial)) // we can write direct object in function also

// Using Array in functon

const trialArray = [200, 344, 566]
function price(price) {
  return `the price is ${price[1]}`
}
console.log(price(trialArray))
