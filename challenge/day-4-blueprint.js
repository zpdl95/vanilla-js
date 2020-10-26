// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectCountry = document.querySelector("select");
const COUNTRY_LS = "country";

function saveCountry(event) {
  /*셀랙터의 선택 이벤트가 발생하면 그 선택한 타겟의 value 값을 찾음*/
  /*여기서는 select>option.value임*/
  const targetCountry = event.target.value;
  localStorage.setItem(COUNTRY_LS, targetCountry);
}

function showCountry(currentCountry) {
  const show = selectCountry.querySelector(`option[value=${currentCountry}]`);
  show.selected = true; /*선택한 태그에 selected속성을 추가, 방법[.속성이름]*/
}

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  if (currentCountry !== null && currentCountry !== "") {
    showCountry(currentCountry);
  }
}

function init() {
  loadCountry();
  selectCountry.addEventListener("change", saveCountry);
}

init();
