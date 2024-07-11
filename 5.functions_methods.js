// Funcitons in JS

function myFunction(msg) {
  // Parameter --> input
  console.log(msg);
}

myFunction("This is the class on the Functions and Methods in Javascript"); // argument

// Function to add two numbers
function add2numbers(a, b) {
  console.log("The Addition of two numbers is " + (a + b));
}

add2numbers(3, 6);

// Arrow Functions in JS
const sumof2nos = (a, b) => {
  return a + b;
};

console.log("The Addition of 2 numbers " + sumof2nos(3, 5));

// Arrow Function for multiplication of 2 Numbers
const mul = (a, b) => {
  return a * b;
};

console.log("The Multiplication of 2 entered numbers is " + mul(4, 4));

// Practice Question
// 1] Create a Function using the "function" keyword that takes a String as an argument& returns the number of vowels in the string

function practice1(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u" ||
      s[i] == "A" ||
      s[i] == "E" ||
      s[i] == "I" ||
      s[i] == "O" ||
      s[i] == "U"
    ) {
      cnt++;
    }
  }

  console.log("The number of vowels in the string is " + cnt);
}

practice1("Aarushi");

// 2] Write the same function using arrow function
let practice2 = (s) => {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u" ||
      s[i] == "A" ||
      s[i] == "E" ||
      s[i] == "I" ||
      s[i] == "O" ||
      s[i] == "U"
    ) {
      cnt++;
    }
  }

  console.log("The number of vowels in the string is " + cnt);
};

practice1("Prajwal");

// forEach Loop in Arrays
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  // each value at each index
  console.log(val);
});

// Using Arrow Functions
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((val) => {
  console.log(val);
});

// Practice Question
// For a given array of numbers , print the square of each value using the forEach Loop

let arr4 = [1, 2, 3, 4, 5];

arr.forEach((val) => {
  console.log(val * val);
});

// Some Important Array Methods
// 1] MAP Method

let arr3 = [1, 5, 8, 55, 6];

let newArr = arr3.map((val) => {
  return val * 2;
});

console.log(newArr);

// 2] FILTER Method

let arr5 = [1, 2, 3, 4, 5, 6, 7];

let filterMethod = arr5.filter((val) => {
  return val % 2 == 0;
});

console.log(filterMethod);

// 3] REDUCE Method
let arr6 = [1, 2, 3, 4];

const result = arr6.reduce((res, curr) => {
  return res + curr;
});

console.log(result);

// Practice Questions
// 1] Given an array of marls of students. Filter out the marks of students greater than 90

let arr7 = [87, 93, 64, 99, 86, 95];
let filteredMarks = arr7.filter((val) => {
  return val > 90;
});

console.log("The Marks greater than 90 are " + filteredMarks);

// 2] Take a Number n as an input from user. Create an array of numbers from 1 to n.
// Use the Reduce Method to calculate the sum of all the numbers in the array
// Use the reduce method to calculate product of all numers in the array

let n = prompt("Enter the number of elements");
let arr8 = [];

for (let i = 1; i <= n; i++) {
  arr8[i - 1] = i;
}

console.log(arr8);

let sum = arr8.reduce((prev, curr) => {
  return prev + curr;
});

console.log("The Addition of the array elements is " + sum);

let mul1 = arr8.reduce((prev, curr) => {
  return prev * curr;
});

console.log("The Multiplication of the array elements is " + mul1);
