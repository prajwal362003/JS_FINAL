let marks = [22, 56, 99, 76, 45, 89];

console.log(marks);
console.log(marks.length);

// 0th position in an array
console.log("The 0th position in an array is " + marks[0]);

// 1th position in an array
console.log("The 1st position in an array is " + marks[1]);

// 2th position in an array
console.log("The 2nd position in an array is " + marks[2]);

// 3th position in an array
console.log("The 3rd position in an array is " + marks[3]);

// 4th position in an array
console.log("The 4th position in an array is " + marks[4]);

// 5th position in an array
console.log("The 5th position in an array is " + marks[5]);

// Looping over an array
let number = [1, 2, 3, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

// Practice Question
// 1] For the given array of marks of students [85,97,44,37,76,60], find the average marks of the entire class

let arr = [85, 97, 44, 37, 76, 60];
let sum = 0;
let avg;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
avg = sum / arr.length;

console.log("The Average of the marks entered is " + avg);

// 2] For a given array of 5 items [250,645,300,900,50] . All items have an offer of 10% on them. Change the array to store final price after applying offer

let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
  items[i] -= 0.1 * items[i];
}

console.log("The List of items after getting 10% Discount is ");
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
