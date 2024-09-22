//console.log(Math.floor(Math.random() * 100 + 1))
let RandomNum = parseInt(Math.random() * 100 + 1);

const Submit = document.getElementById("subt");

const UserInput = document.getElementById("guessField");

const guesses = document.querySelector(".guesses");

const TimeRemaining = document.querySelector(".lastResult");

const LowHig = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let NumGuess = 1;
let playGame = true;

if (playGame) {
  Submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid numberS");
  } else if (guess < 1) {
    alert("please enter a number more than 1");
  } else if (guess > 100) {
    alert("please enter number less than 100");
  } else {
    prevGuess.push(guess);
    if (NumGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${RandomNum}`);
      EndGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === RandomNum) {
    displayMessage(`You guessed right `);
    EndGame();
  } else if (guess < RandomNum) {
    displayMessage(`Number is too low`);
  } else if (guess > RandomNum) {
    displayMessage(`Number is too high`);
  }
}
//clean a display number
function displayGuess(guess) {
  UserInput.value = "";
  guesses.innerHTML += `${guess},`;
  NumGuess++;
  TimeRemaining.innerHTML = `${11 - NumGuess}`;
}
function displayMessage(message) {
  LowHig.innerHTML = `<h2>${message}</h2>`;
}
function EndGame() {
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id="newGame">Start new Game</h3>`;
  StartOver.appendChild(p);
  playGame = false;
  StartGame();
}
function StartGame() {
  document.querySelector("#newGame").addEventListener("click", (e) => {
    RandomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 1;
    guesses.innerHTML = "";
    TimeRemaining.innerHTML = `${11 - NumGuess}`;
    UserInput.removeAttribute("disabled");
    StartOver.removeChild(p);
    playGame = true;
  });
}
