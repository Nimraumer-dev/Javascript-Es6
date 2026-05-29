// Global Scope

//var variable
// var userName = "Nimra";

// // let variable
// let age = 21;

// // const variable
// const country = "Pakistan";

// // Logging variables
// console.log(userName);
// console.log(age);
// console.log(country);


// /*Yes, all three variables are accessible globally because they are declared outside of any function or block.
// They can be accessed from anywhere in the program*/



// // Function Scope

// function userInfo() {

//     // var variable
//     var userName = "Nimra";

//     //let variable
//     let age = 21;

//     // const variable
//     const country = "Pakistan";

//     // Inside function
//     console.log(userName);
//     console.log(age);
//     console.log(country);
// }

// // Calling function
// userInfo();

// //Outside function
// console.log(userName);
// console.log(age);       
// console.log(country);



// Variables declared with `var`, `let`, and `const` inside a function can only be used within that function.
// They are not accessible outside the function because they have function scope.

// When we try to access them outside the function, JavaScript shows a `ReferenceError`.


//Block scope 

// if(true){
//     var cookie = "chocolate cookie";

//     let pancakes = "vanilla";

//     const pizza = "pepperoni";

// }

// console.log(cookie);
// console.log(pancakes);
// console.log(pizza);



//The var variable works outside the block because var is not block-scoped.

//But let and const give an error because they are block-scoped and can only be used inside the block.


//HOISTING WITH var let & const


// console.log(subject);

// var subject = "urdu";


// console.log(rooms);

// let rooms = "ten";


// console.log(chairs);

// const chairs = 30;


//Re-declaration

var name = "Ali";
var name = "Ahmed";

console.log(name);

//  var allows re-declaration.


let age = 20;
let age = 25;

console.log(age);

// let does NOT allow re-declaration.

const city = "Karachi";
const city = "Lahore";

console.log(city);

// const also does NOT allow re-declaration.

//Re-assignment

var country = "Pakistan";
country = "India";

console.log(country);

// allow

let price = 100;
price = 200;

console.log(price);

//allow


const pi = 3.14;
pi = 3.141;

console.log(pi);

// not allowed


//Temporal Dead Zone (TDZ)

// let
{
    console.log(a);
    let a = 10;
}

//const

{
    console.log(b);
    const b = 20;
}

//Because let and const are in Temporal Dead Zone (TDZ) until declaration line is reached




// When to use var, let, const
// var (old style, avoid in modern code)


var score = 50;
if (true) {
    var score = 100;
}
console.log(score);

//Used when function scope behavior is needed, but generally avoid


// let (when value changes)

let counter = 1;
counter = counter + 1;

console.log(counter);

// Use when value will change


// const (best practice)


const username = "Nimra";

console.log(username);

// Use when value should NOT change


// String Interpolation

let firstName = "Nimra";
let lastName = "Umer";

let fullName = `${firstName} ${lastName}`;

console.log(fullName);


// String interpolation is a way to combine variables and text inside a string using template literals.
// In JavaScript we use backticks ( ) and ${ } to insert variables directly into a string.
// This makes the code cleaner easier to read and avoids using long string concatenation with + signs.



// Multi-line Strings

let address = `House # 25
Street # 4
Karachi, Pakistan`;

console.log(address);

// Template literals allow multi-line strings easily


// Simple Expressions

let num1 = 10;
let num2 = 5;

let result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;

console.log(result);

// We can directly perform calculations inside ${ }.


// Function Calls

function multiply(a, b) {
    return a * b;
}

let num1 = 4;
let num2 = 3;

let result = `The product of ${num1} and ${num2} is ${multiply(num1, num2)}`;

console.log(result);

//Functions can also be called inside template literals.