// Practice Question 1
// Create a new button element. Give it a text "click me" , background color of red and text color of white.
// Insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// let selectBody = document.querySelector("body");
// selectBody.prepend(newBtn);

newBtn.addEventListener("click", () => {
  console.log("Button 1 was Pressed");
});

// Practice Question 2
// Create a toggle button that changes the screen to dark-mode when clicked & light mode when clicked again

let btn3 = document.createElement("button");
btn3.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.getElementById("toggle").innerHTML = "Dark Mode";
  } else {
    document.body.classList.add("dark");
    document.getElementById("toggle").innerHTML = "Light Mode";
  }
});
