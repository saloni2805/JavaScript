// Singleton

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 4: "a", 5: "b" }

// const AllObjects = Object.assign({}, obj1, obj2, obj3) //{} is target and all other are source

const AllObjects = { ...obj1, ...obj2, ...obj3 }

console.log(AllObjects) //It will return all objects means add all object values in single 1st object

const User = {
  name: "saloni",
  email: "ss@gmail.com",
  isLoggenin: true,
}

console.log(Object.keys(User))
console.log(Object.values(User))
console.log(User.hasOwnProperty("isLoggenin"))

const course = {
  name: "Java",
  fees: 500,
}

console.log(course.fees) // dont do this every time ....instead=>use deconstructor

const { fees: fee, name } = course

console.log(fee)
