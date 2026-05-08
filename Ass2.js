//Question no : 1 Basic MArksheet

const studentName = "Ali";

let englishMarks = 75;
let mathMarks = 80;
let scienceMarks = 70;
let urduMarks = 85;

// total marks calculation
let totalMarks = englishMarks + mathMarks + scienceMarks + urduMarks;

// percentage calculation
let percentage = (totalMarks / 400) * 100;

// grade checking
let grade = "";

if (percentage >= 80) {
  grade = "A+";
} else if (percentage >= 70) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else {
  grade = "Fail";
}

// output on screen
document.write(`
  <h2>Student Mark Sheet</h2>
  Name: ${studentName} <br>
  Total Marks: ${totalMarks} / 400 <br>
  Percentage: ${percentage}% <br>
  Grade: ${grade}
`);









//Question no : 2 Reduce function

function myReduce(arr, callback, initialValue) {
  let result = initialValue;
  let startIndex = 0;

  // if initial value is not given
  if (result === undefined) {
    result = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }

  return result;
}

// Example use
let numbers = [1, 2, 3, 4];

let sum = myReduce(numbers, function (acc, value) {
  return acc + value;
}, 0);

console.log("Sum:", sum);



//Question no : 3 Reverse Array without new array

let arr = [1, 2, 3, 4, 5];

let start = 0;
let end = arr.length - 1;

while (start < end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  start++;
  end--;
}

console.log("Reversed Array:", arr);


//Question no : 4 Merge two array without concat


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [];

// first array add
for (let i = 0; i < array1.length; i++) {
  mergedArray.push(array1[i]);
}

// second array add
for (let i = 0; i < array2.length; i++) {
  mergedArray.push(array2[i]);
}

console.log("Merged Array:", mergedArray);



//Question no : 5 Reverse words in sent...

let sentence = "hello world";

// split words, reverse them, join again
let reversedSentence = sentence.split(" ").reverse().join(" ");

console.log(reversedSentence);


//Question no : 6 

//var hoisted
console.log(a); // undefined
var a = 10;

//let and const 

console.log(a); // undefined
var a = 10;

//function (fully hoisted)
sayHello();

function sayHello() {
  console.log("Hello!");
}



//Question no : 7 eg of hoisting problem 

sayHello();

function sayHello() {
  console.log("Hello!");
}

//correct way 


let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome user");
}


//Question no : 8 dynamic email template function 

function createEmail(name, type, orderId) {
  if (type === "welcome") {
    return `Hello ${name}, welcome to our platform!`;
  }

  if (type === "order") {
    return `Hi ${name}, your order #${orderId} is confirmed.`;
  }

  return `Hello ${name}`;
}

// examples
console.log(createEmail("Nimra", "welcome"));
console.log(createEmail("Nimra", "order", 101));


//Question no : 9 Template literals Performance issue

let users = ["ali", "sara", "john", "ahmed"];

for (let i = 0; i < users.length; i++) {
  let name = users[i].toUpperCase();
  console.log(`${name} is logged in`);
}
