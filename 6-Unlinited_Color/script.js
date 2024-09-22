const randomColors = function () {
  const hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const startcolorchag = function () {
  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColors();
  }
};
const stopcolorchag = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector("#start").addEventListener("click", startcolorchag);

document.querySelector("#stop").addEventListener("click", stopcolorchag);
