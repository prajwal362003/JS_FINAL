// Loops in JS

for (let i = 0; i < 5; i++) {
  console.log("This is the lecture 3");
}

// Calculate the sum of 1 to n numbers

let sum = 0;
let n = 6;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("The Sum of q to 5 is " + sum);

// While Loop
let j = 1;
while (j <= 9) {
  console.log("Prajwal");
  j++;
}

// Print all even numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value
let guessNo;
let gameNumber = 32;
console.log("Welcome to the guess the Number Challenge");

while (guessNo != gameNumber) {
  guessNo = prompt("Guess the Number");
  if (guessNo == gameNumber) {
    console.log("Cool, You've guessed the correct number");
  } else {
    console.log("Sorry,wrong number guessed..Try again");
  }
}

// Strings in JS
let name = "Prajwal";
console.log("Hello " + name);

console.log("The Length of the String is " + name.length);
console.log("The First Character in the string is " + name[0]);

// Ask the User to enter their Username and add @ to the starting and length of a string to the end of a username
let user_name = prompt("Enter your full name to generate the user name");
let final_username = "@" + user_name + user_name.length;

console.log("Your Username is " + final_username);
