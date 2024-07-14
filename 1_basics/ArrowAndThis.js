const user = {
  uname: "saloni",
  pass: "sspp",
  welcomeuser: function () {
    console.log(`${this.uname} Hello `)
  },
}

user.welcomeuser()

//  'this' is used to refer current context

// Arrow

// const addTwo = (n1, n2) => {
//   return n1 + n2
// }                          // 1st Method  //Explisit

// const addTwo = (n1, n2) => n1 + n2    // Implisit

const addTwo = (n1, n2) => ({ name: "salonii" }) // Implisit

console.log(addTwo(4, 5))

// STUDY DIFFERENCE BETWEEN NORMAL ARRAY AND ARROW FUNCTION
