const employee = {
  name: "Prajwal",
  age: 20,

  calcTax() {
    console.log("Tax Rate is 10%");
  },
};

const bhupendra = {
  salary: 50000,

  calcTax() {
    console.log("Tax Rate is 20%");
  },
};

bhupendra.__proto__ = employee;

// Classes in Js
class Car {
  constructor(brand) {
    console.log("I am a constructor");
    this.brand = brand;
  }
  start() {
    console.log("Car starts");
  }

  stop() {
    console.log("Car stops");
  }
}

let ford = new Car(); // construtor invoked
ford.start();
ford.stop();
ford.brand = "fortuner";
console.log(ford);

// Inheritance in JS

class Person {
  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("Sleep");
  }
}

class Engineer extends Person {
  code() {
    console.log("Code");
  }

  repeat() {
    console.log("Repeat");
  }

  sleep() {
    console.log("Child Class Method");
  }
}

let obj = new Engineer();
obj.eat();
obj.sleep(); // overriding
obj.code();
obj.repeat();

// Practice Question-1
// You are creating a website for your college. Create a class User with 2 properties, name and email. It also has a method called ViewData() that allows user to view website data.

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("The Name of the User is " + this.name);
    console.log("The Email Id of the User is " + this.email);
  }
}

let user1 = new User("Prajwal", "prajwalkale003@gmail.com");
user1.viewData();

// Practice Question-2
// Create a new class Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data

class Admin {
  constructor(name, address, phone_no) {
    this.name = name;
    this.address = address;
    this.phone_no = phone_no;
  }
}

class Users extends Admin {
  constructor(password) {
    super();
    this.password = password;
  }
}

let User1 = new Users("prajwal@.in");
let User2 = new Users("Prajwal", "Nashik", "808000***");
console.log("Name : " + User1.name);
console.log("Address " + User2.address);

console.log("Password : " + User1.password);

// Try - Catch block for Error Handling
let a = 5;
let b = 0;

try {
  let divide = a / b;
  console.log("The Division of a and b is " + divide);
} catch (err) {
  console.log("Divide by zero error" + err);
}
