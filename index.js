const title = document.querySelector(".js-title");

const CLICKED_CLASS = "clicked";

/*function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  .contains는 있는지 없는지 체크하는 함수
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}*/
function handleClick() {
  /*toggle은 체크해서 있으면 제거 없으면 넣어줌*/
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
