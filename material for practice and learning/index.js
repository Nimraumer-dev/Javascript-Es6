//  function message(callback) {
//   console.log("Learning JavaScript");
//   callback();
// }

// function done() {
//   console.log("Lesson Complete");
// }

// message(done)


// function calculate(num, callback) {
//   callback(num);
// }

// function square(x) {
//   console.log(x * x);
// }

// calculate(9, square);

// let students = ["Ali", "Ahmed", "Sara"]
// students.forEach(function(student) {
//   console.log(student);
// });


//  function fetchData(callback) {
//   setTimeout(() => {
//     let data = { name: "Hamza", age: 25 };
//     callback(data);
//   }, 3000);
// }

// fetchData(function(result) {
//   console.log(result.name);
//   console.log(result.age);
// });



//  let myPromise = new Promise((resolve, reject) => {

//    resolve("Data Loaded");

//  });

//  myPromise.then((result) => {
//    console.log(result);
// });

// let check = new Promise((resolve, reject) => {

//     reject("Something went wrong");

// });

// check.catch((error) => {
//     console.log(error);
// });

//  function fetchUser() {

//     return new Promise((resolve) => {

//        setTimeout(() => {
//           resolve({
//               name: "Hamza",
//             age: 24
//             });
//        }, 2000);

//   });

// }

// async function getUser() {

//      console.log("Loading...");

//     let user = await fetchUser();

//    console.log(user.name);
//    console.log(user.age);

//  }

//  getUser();
// function divide(a, b) {
//     try {
//         if(b === 0) {
//              throw "Cannot divide by zero";
//         }

//        return a / b;
//    }
//     catch(error) {
//         console.log("Error:", error);
//   }
//   finally {
//        console.log("Calculation Finished");
//     }
// }
//  console.log(divide(10, 0));
//  fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(data => console.log(data));

 fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
   .then(data => {
    data.forEach(item => {
      document.write(`
        ID: ${item.id} <br>
        Title: ${item.title} <br>
        Completed: ${item.completed} <br><hr>
      `);
    });
  });
