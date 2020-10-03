const body = document.querySelector("body");
/*이미지 개수*/
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  /*new를 적고 뒤 함수를 쓰는 이유는 해당함수를 객채로 만들기 위함*/
  const image = new Image();
  /*랜덤숫자 +1을 한 이유는 0의 값이 나올 수도 있기 때문*/
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  /*Math는 수학함수, .floor는 소숫점 아래 버리기*/
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
