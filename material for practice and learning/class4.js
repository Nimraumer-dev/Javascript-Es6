// A callback function is a function that is passed as an argument (parameter) to another function and is executed later.

// In simple words:

// “Passing a function inside another function.”

// Real-life Example 

// Imagine you order a pizza.

// You place the order.
// The pizza takes time to prepare.
// When the pizza is ready, the restaurant calls you back.


// function message(callback) {
//   console.log("Learning JavaScript");
//   callback();
// }

// function done() {
//   console.log("Lesson Complete");
// }

// message(done);

// function calculate(num, callback) {
//   callback(num);
// }

// function square(x) {
//   console.log(x * x);
// }

// calculate(9, square);

// let students = ["Ali", "Ahmed", "Sara"];

// students.forEach(function(student) {
//   console.log(student);
// });

// //setTimeout() callback
// console.log("Start");

// setTimeout(function() {
//   console.log("After 2 seconds");
// }, 2000);

// console.log("End");


// function fetchData(callback) {
//   setTimeout(() => {
//     let data = { name: "Hamza", age: 25 };
//     callback(data);
//   }, 3000);
// }

// fetchData(function(result) {
//   console.log(result.name);
//   console.log(result.age);
// });

//2 topic

// What is a Promise?

// A Promise is an object that represents the result of an asynchronous operation that may be completed in the future.

// In simple words:

// “The result is not available right now, but it will be available in the future.”
// Promise States
// Pending:Work is in progress
// Resolved / Fulfilled:Work completed successfully
// Rejected:Work failed

// let myPromise = new Promise((resolve, reject) => {

//     resolve("Data Loaded");

// });

// myPromise.then((result) => {
//     console.log(result);
// });

//Promise Reject

// let check = new Promise((resolve, reject) => {

//     reject("Something went wrong");

// });

// check.catch((error) => {
//     console.log(error);
// });

// let task = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Task completed after 2 seconds");
//     }, 2000);

// });

// task.then((msg) => {
//     console.log(msg);
// });


// let number = new Promise((resolve) => {
//     resolve(40);
// });

// number
// .then((num) => {
//     return num * 2;
// })
// .then((result) => {
//     console.log(result);
// });

// | Method    | Purpose                             |
// | --------- | ----------------------------------- |
// | `then()`  | Handles successful result           |
// | `catch()` | Handles errors or rejected promises |
// async Keyword

// The async keyword makes a function asynchronous.

// await Keyword

// The await keyword waits for a Promise to be completed before moving to the next line of code.
// function fetchUser() {

//     return new Promise((resolve) => {

//         setTimeout(() => {
//             resolve({
//                 name: "Hamza",
//                 age: 24
//             });
//         }, 2000);

//     });

// }

// async function getUser() {

//     console.log("Loading...");

//     let user = await fetchUser();

//     console.log(user.name);
//     console.log(user.age);

// }

// getUser();

// Promise Start
//      ↓
//   Success ? ---- Yes ----> then()
//      |
//      No
//      ↓
//   catch()


// try...catch...finally
// try...catch...finally is used for error handling in JavaScript.

// It helps prevent the program from crashing when an error occurs.



// | Block     | Purpose                                 |
// | --------- | --------------------------------------- |
// | `try`     | Contains code that may produce an error |
// | `catch`   | Handles the error                       |
// | `finally` | Runs whether there is an error or not   |



// try {
//     console.log(a);
// }
// catch(error) {
//     console.log("Variable not found");
// }

// try {
//     let num = 10;

//     if(num > 5) {
//         throw "Number is too large";
//     }

//     console.log(num);
// }
// catch(error) {
//     console.log("Error:", error);
// }

// try {
//     let num = 10;

//     if(num > 5) {
//         throw "Number is too large";
//     }

//     console.log(num);
// }
// catch(error) {
//     console.log("Error:", error);
// }

// function divide(a, b) {
//     try {
//         if(b === 0) {
//             throw "Cannot divide by zero";
//         }

//         return a / b;
//     }
//     catch(error) {
//         console.log("Error:", error);
//     }
//     finally {
//         console.log("Calculation Finished");
//     }
// }

// console.log(divide(10, 2));


// Real-life Example 

// Imagine you use an ATM machine:

// try → You enter the card and withdraw money
// catch → If the PIN is wrong, the ATM shows an error
// finally → ATM returns your card no matter what happens


// Important Points
// try must have either catch or finally
// finally always executes
// throw is used to create custom errors
// Helps make applications safer and more stable
// Fetch API :
	
//  fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(data => console.log(data));




// Fetch and Foreach:
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(item => {
//       document.write(`
//         ID: ${item.id} <br>
//         Title: ${item.title} <br>
//         Completed: ${item.completed} <br><hr>
//       `);
//     });
//   });

