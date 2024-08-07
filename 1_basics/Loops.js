const arr = [1, 2, 3, 4]

for (const i of arr) {
  // console.log(i)
}

// ------Maps-------

const map = new Map()
map.set("IN", "France")
map.set("Fr", "France")
// console.log(map)
// Output: Map(2) { 'IN' => 'France', 'Fr' => 'France' }
// Map includes only Unique key values

// Now you can iterate map using "For..Of"
for (const [key, value] of map) {
  // console.log(key, value)
}

// ----Objects---
// we can not use "For..Of" to iterate Object like Map

const MyObject = {
  Hey: "Heyy",
  No: "Noo",
}

for (const key in MyObject) {
  // console.log(key)
  // console.log(`${key} shor form of ${MyObject[key]}`)
}

// Higher Order

const coding = ["php", "java", "python"]

coding.forEach((element, index, arr) => {
  // console.log(element, index, arr)
})

// Array of Objects

const MyCoding = [
  { Language: "JavaScript", Version: 4.5 },
  { Language: "Python", Version: 6.5 },
  { Language: "Java", Version: 4.2 },
]

MyCoding.forEach((element) => {
  console.log(element.Version)
})

// ForEach doesnt return anything

// Filter returns value
