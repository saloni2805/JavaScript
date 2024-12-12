// const myPromise = new Promise(function (resolve, reject) {
//     // DB Calls, Cryptography, network
//     setTimeout(() => {
//         console.log("Async Task Complete");
//         resolve();
//     }, 1000)
// })

// myPromise.then(function () {
//     console.log("first")
// })

// COMBINED WAY

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Asynce Task 2");
        resolve({ username: "Saloni", Pass: "122vrijb" });
    }, 1000)
}).then(function (user) {
    console.log("Task Resolved")
    console.log(user)

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Mee", pass: "5894yheh" })
        }
        else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})

// promiseThree
//     .then(function (user) {
//         console.log(user);
//         return user.username;
//     })
//     // Next "then" cathces the returned value of previous "then"
//     .then(function (usernam) {
//         console.log(usernam)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
//     .finally(function () {
//         console.log("Task either rosolved or rejected")
//     })

async function consumePromise() {
    try {
        // Always store the promise object in variable e.g response
        let response = await promiseThree;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromise();

// async function getAllUser() {
//     try {
//         let response = await fetch("https://dummyjson.com/todos");
//         // console.log(response);
//         let data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUser();

fetch('https://dummyjson.com/todos')
    .then(
        (response) => {
            return response.json();
        }
    ).then(
        (data) => { console.log(data); }
    ).catch((error) => { console.log("Error Occoured") })

