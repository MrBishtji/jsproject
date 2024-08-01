//first way1
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "red") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "skyblue") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "green") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    } else {
      body.style.backgroundColor = "yello";
    }
  });
});

//second way1
// const red = document.querySelector("#red");
// red.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });
// const skyblue = document.querySelector("#skyblue");
// skyblue.addEventListener("click", function () {
//   document.body.style.backgroundColor = "skyblue";
// });
// const green = document.querySelector("#green");
// green.addEventListener("click", function () {
//   document.body.style.backgroundColor = "green";
// });
// const blue = document.querySelector("#blue");
// blue.addEventListener("click", function () {
//   document.body.style.backgroundColor = "blue";
// });
