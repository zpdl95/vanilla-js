const weatherPlace = document.querySelector(".js-weather__place");
const weatherSky = document.querySelector(".js-weather__sky");
const weatherTemp = document.querySelector(".js-weather__temp");
const API_KEY = "434e4d55ced79428b160d0ff40fab01c";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    /*함수뒤 .then()을 사용하면 앞 함수 처리가 끝나고 then안의 함수를 실행함*/
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      const sky = json.weather[0].description;
      weatherPlace.innerText = `${place}`;
      weatherSky.innerText = `${sky}`;
      weatherTemp.innerText = `${temperature}℃`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  console.log(coordsObj);
}

function handleGeoError() {
  console.log("cant access geo location");
}

function handleGeoSucc(position) {
  /*현 위치의 위도와 경도를 잡음*/
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    /*이름과 값을 같은것으로 할려면 하나만 작성한다.*/
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function askForCoords() {
  /*getCurrentPosition함수는 성공했을때의 함수와 실패했을때의 함수를 필요로함*/
  navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoError);
}

/*좌표 로드*/
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
