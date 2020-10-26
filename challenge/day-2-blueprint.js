// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const bg = document.querySelector("body");
const h1 = document.querySelector("h1");

function handler() {
  const width = window.innerWidth;
  h1.innerText = width;

  if (width < 600) {
    bg.style.backgroundColor = "red";
  } else if (600 <= width && width <= 800) {
    bg.style.backgroundColor = "green";
  } else {
    bg.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", handler);
