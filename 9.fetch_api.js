const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// Using Promise Chaining

function getFacts() {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[1].text;
    });
}

// Using Async-Await

// const getFacts = async () => {
//   console.log("Getting Data");

//   let response = await fetch(URL);
//   console.log(response);

//   let data = await response.json();
//   factPara.innerText = data[0].text;
// };

btn.addEventListener("click", getFacts);
