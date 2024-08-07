// ---------------Filter----------------

const MyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Mynumss = MyNum.filter((num) => {
  return num >= 4 // "Return" is necessary as it is written in a scope, if used {} use "return"
})
// console.log(Mynumss)

const Books = [
  {
    BookName: "Book1",
    genere: "History",
    Publish: 2011,
  },
  {
    BookName: "Book2",
    genere: "Science",
    Publish: 2001,
  },
  {
    BookName: "Book3",
    genere: "Fiction",
    Publish: 2004,
  },
  {
    BookName: "Book4",
    genere: "History",
    Publish: 2020,
  },
  {
    BookName: "Book5",
    genere: "Science",
    Publish: 2011,
  },
]

const userBooks = Books.filter((bk) => {
  return bk.genere == "History"
})
// console.log(userBooks)

const myBook = Books.filter(
  (bk) => bk.genere == "Science" || bk.Publish == 2011
)
// console.log(myBook)

// ----------------------Map--------------------

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const nums = Numbers.map((nm) => nm + 4)
  .map((nm) => nm * 4)
  .filter((nm) => nm > 20)
// console.log(nums) // Chaining

// --------------------Reduce-----------------

const MyNumbers = [1, 2, 3]

const MyNumber = MyNumbers.reduce((acc, curVal) => {
  console.log(`Value of Accumlator ${acc}`)
  console.log(`Value of Current Value ${curVal}`)
  return acc + curVal
}, 0)

console.log(MyNumber)

const Products = [
  { itemName: "JS Cource", price: 1200 },
  { itemName: "Py Cource", price: 600 },
  { itemName: "Java Cource", price: 200 },
]

const ShoppingTotal = Products.reduce((acc, item) => {
  return acc + item.price
}, 0)

console.log(ShoppingTotal) // 2000
