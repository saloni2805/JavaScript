let Descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(Descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

const chai = {
    name: 'Ginger Chai',
    price: 5648,
    isAvailable: true,
    orderChai: function () {
        console.log('Chai not available now')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// {
//      value: 'Ginger Chai',
//      writable: false, //Not changable property
//      enumerable: false, //Not iterable property
//      configurable: true
// }

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}

// name: Ginger Chai
// price: 5648
// isAvailable: true

