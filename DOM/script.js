console.log("Hello World..!");
alert("Bhupendra Jogi");

document.getElementsByClassName("mydiv");
document.getElementById("unique");

document.querySelector(".mydiv");

let divi = document.querySelector(".mydiv").innerText;
console.log(divi);

let ids = document.querySelectorAll("#unique").innerText;
console.log(ids);

let new1 = document.querySelector("#heading1");
new1.innerText = new1.innerText + " from Prajwal";
console.log(new1.innerText);

let hello = document.querySelector(".hello");
console.log(hello);

let val = hello.getAttribute("class");
console.log(val);

let para = document.querySelector("p");
console.log(para);

let pa = para.getAttribute("p");
console.log(pa);

let newBtn = document.createElement("button");
newBtn.innerText("Click Me");
bodySelect.prepend();
