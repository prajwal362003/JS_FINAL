// // Synchronous Programming

// console.log("First");
// console.log("Second");
// console.log("Third");

// // Asynchronous Programming
// console.log("First");
// console.log("Second");

// setTimeout(() => {
//   console.log("4 seconds done");
// }, 4000);

// console.log("Third");
// console.log("Fourth");

// // Callbacks in JS
// // function sum(a, b) {
// //   console.log(a + b);
// // }

// const calculator = (a, b, sumCallback) => {
//   sumCallback(a, b);
// };

// // Function passed as an argument to another function
// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

// // Callback Hell
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);

//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("Getting data 2....");
//   getData(2, () => {
//     console.log("Getting data 3....");
//     getData(3, () => {
//       console.log("Getting data 4....");
//       getData(4);
//     });
//   });
// });

// // Promises in JS
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");

//       if (getNextData) {
//         return getNextData();
//       }
//     }, 5000);
//   });
// }

// function xyz(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("I am a promise");
//       resolve("Success");
//     }, 6000);
//   });
// }

// let promise1 = xyz(123);

// // Some Important Methods in Promises
// // .then() method in javascript
// let thenMethod = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Learning .then() method in Promises");
//     resolve("Successfully completed the .then() method in Promises");
//   });
// };

// let promise2 = thenMethod();
// promise2.then((res) => {
//   console.log("Criteria Resolved", res);
// });

// // .catch() method in Javascript
// const catchMethod = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Learning .catch() method in Promises");
//     reject("Rejected");
//   });
// };

// let promise3 = catchMethod();
// promise3.catch((err) => {
//   console.log("Criteria not resolved", err);
// });

// // Promise Practice

// let practice_Promise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promises Practiced Successfully");
//       resolve("Success");
//     }, 4000);
//   });
// };

// let p1 = practice_Promise();
// p1.then((res) => {
//   console.log("RESOLVED", res);
// });

// // Chaining in Promises
// let chaining_practice1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data3");
//       resolve("Success");
//     }, 4000);
//   });
// };

// let chaining_practice2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data4");
//       resolve("Success");
//     }, 4000);
//   });
// };

// let p3 = chaining_practice1();
// console.log("Fetching Data 3...");
// p3.then((res) => {
//   console.log(res);

//   console.log("Fetching Data 4...");
//   let p4 = chaining_practice2();
//   p4.then((res) => {
//     console.log(res);
//   });
// });

//  // Promise Chain to above callback hell eg above

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");
//     }, 2000);
//   });
// }

// // Method 1 to perform Chaining
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   });
// });

// // Method 2 to perform Chaining
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// // Async Await in Js

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api(); // 1st call
//   await api(); // 2nd call
// }

// Async Await of getdata function

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAboveData() {
  console.log("Getting Data 1...");
  await getData(1); // 1st data after 2 seconds
  console.log("Getting Data 2...");
  await getData(2); // 2nd data after 4 seconds
  console.log("Getting Data 3...");
  await getData(3); // 3rd data after 6 seconds
  console.log("Getting Data 4...");
  await getData(4); // 4th data after 8 seconds
  console.log("Getting Data 5...");
  await getData(5); // 5th data after 10 seconds
}

// Immediately Invoked Function Expression (IIFE) - Advanced Javascript
// It will Automatically get invoked (No need to call this function in the console)
(async function () {
  console.log("Getting Data 1...");
  await getData(1); // 1st data after 2 seconds
  console.log("Getting Data 2...");
  await getData(2); // 2nd data after 4 seconds
  console.log("Getting Data 3...");
  await getData(3); // 3rd data after 6 seconds
  console.log("Getting Data 4...");
  await getData(4); // 4th data after 8 seconds
  console.log("Getting Data 5...");
  await getData(5); // 5th data after 10 seconds
})();
