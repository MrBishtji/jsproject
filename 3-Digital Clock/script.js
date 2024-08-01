const clock = document.getElementById("time");
// const clock=document.querySelector("#time")

setInterval(() => {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);
