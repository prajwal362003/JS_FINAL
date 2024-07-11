// Comments in JS
// This is the Lecture 2 of JS

console.log("Lecture-2");

// Operators in JS
// Arithmetic Operators
let a = 6;
let b = 4;
let add = a + b;
let sub = a - b;
let mul = a * b;
let divi = a / b;

console.log("The Addition of a and b is " + add);
console.log("The Subtraction of a and b is " + sub);
console.log("The Multiplication of a and b is " + mul);
console.log("The Division of a and b is " + divi);

// Assignment Operators
let c = 9;
c += 5;

console.log("The Value of c is " + c);

// Logical Operators
let x = true;
let y = false;

console.log("The logical AND Value is " + x && y);
console.log("The logical OR Value is " + x || y);
console.log("The logical NOT Value of x is " + !x);

// Conditional Statements
let age = 18;

if (age >= 18) {
  console.log("You can Vote");
} else {
  console.log("You cannot vote");
}

// Ternary Operators
let age1 = 19;

let result = age1 >= 18 ? "adult" : "not adult";
console.log(result);
