// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const h2 = document.querySelector("h2");
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900").getTime();
  const nowDay = new Date().getTime();
  const distance = xmasDay - nowDay;
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const m = Math.floor((distance / (1000 * 60)) % 60);
  const s = Math.floor((distance / 1000) % 60);

  h2.innerText = `${d}d ${h < 10 ? `0${h}` : h}h ${m < 10 ? `0${m}` : m}m ${
    s < 10 ? `0${s}` : s
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
