const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
  /*new를 적고 뒤 함수를 쓰는 이유는 해당함수를 객채로 만들기 위함*/
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  /*setInterval은 해당 함수를 해당시간을 주기로 실행함*/
  setInterval(getTime, 1000);
}

init();
