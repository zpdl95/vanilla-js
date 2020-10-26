// <⚠️ DONT DELETE THIS ⚠️>
// import "./day-7-blueprint-answer.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const displayContent = document.querySelector(".content");
const displayResult = document.querySelector(".result");

const c = document.querySelector(".c"),
  seven = document.querySelector(".seven"),
  eight = document.querySelector(".eight"),
  nine = document.querySelector(".nine"),
  plus = document.querySelector(".plus"),
  four = document.querySelector(".four"),
  five = document.querySelector(".five"),
  six = document.querySelector(".six"),
  minus = document.querySelector(".minus"),
  one = document.querySelector(".one"),
  two = document.querySelector(".two"),
  three = document.querySelector(".three"),
  times = document.querySelector(".times"),
  zero = document.querySelector(".zero"),
  equal = document.querySelector(".equal"),
  divide = document.querySelector(".divide");

let displayNum = "";
let displayCal = "";
let result = "";

function calculate(event) {
  if (
    displayCal.slice(-1) !== "+" &&
    displayCal.slice(-1) !== "-" &&
    displayCal.slice(-1) !== "*" &&
    displayCal.slice(-1) !== "/"
  ) {
    result = eval(displayCal);
    displayResult.value = result;
    displayContent.value = displayCal;
  }
}

function addDivide(event) {
  if (displayCal.slice(-1) !== "/") {
    if (displayCal !== "") {
      displayCal += "/";
    }
  }
  displayContent.value = displayCal;
  displayNum = "";
  displayResult.value = "";
}

function addTimes(event) {
  if (displayCal.slice(-1) !== "*") {
    if (displayCal !== "") {
      displayCal += "*";
    }
  }
  displayContent.value = displayCal;
  displayNum = "";
  displayResult.value = "";
}

function addMinus(event) {
  if (displayCal.slice(-1) !== "-") {
    if (displayCal !== "") {
      displayCal += "-";
    }
  }
  displayContent.value = displayCal;
  displayNum = "";
  displayResult.value = "";
}

function addPlus(event) {
  if (displayCal.slice(-1) !== "+") {
    if (displayCal !== "") {
      displayCal += "+";
    }
  }
  displayContent.value = displayCal;
  displayNum = "";
  displayResult.value = "";
}

function reset(event) {
  displayNum = "";
  displayCal = "";
  displayContent.value = "";
  displayResult.value = 0;
}

function insert(event) {
  displayNum += event.target.innerText;
  displayResult.value = displayNum;
  displayCal += event.target.innerText;
}

c.addEventListener("click", reset);
plus.addEventListener("click", addPlus);
minus.addEventListener("click", addMinus);
times.addEventListener("click", addTimes);
divide.addEventListener("click", addDivide);
equal.addEventListener("click", calculate);

seven.addEventListener("click", insert);
eight.addEventListener("click", insert);
nine.addEventListener("click", insert);
four.addEventListener("click", insert);
five.addEventListener("click", insert);
six.addEventListener("click", insert);
one.addEventListener("click", insert);
two.addEventListener("click", insert);
three.addEventListener("click", insert);
zero.addEventListener("click", insert);
