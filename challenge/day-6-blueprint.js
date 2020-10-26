// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.querySelector(".js-range"),
  h3Num = document.querySelector(".js-h3Num"),
  compare = document.querySelector("h4"),
  playBtn = document.querySelector("input[type=button]"),
  guessNum = document.querySelector("#guessNum");

const SHOWING_CN = "js-showing";

function paintResult(event) {
  const guessN = guessNum.value;
  const machineNum = Math.floor(Math.random() * range.value);
  compare.innerText = `You chose: ${guessN}, the machine chose: ${machineNum}.`;
  const result = document.querySelector(".result");
  const h3result = result.querySelector("h3");
  if (parseInt(guessN) === machineNum) {
    h3result.innerText = `You won!`;
  } else {
    h3result.innerText = `You lost!`;
  }
  if (guessN !== "") {
    result.classList.add(SHOWING_CN);
  }
}

function setNum(event) {
  h3Num.innerText = `Generate a number between 0 and ${range.value}`;
}

function init() {
  range.addEventListener("input", setNum);
  playBtn.addEventListener("click", paintResult);
}

init();
