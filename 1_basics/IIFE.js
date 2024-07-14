// Immediately Invoked Function Expressions (IIFE)

// What is IIFE?
// there are problem gets created bcz of Global Scope Pollution, to remove Global Scope variable pollution

// Named IIFE
;(function chai() {
  console.log(`Done DB`)
})()

// Non Named IIFE
;((name) => {
  console.log(`Done DBB ${name} `)
})("salu")
