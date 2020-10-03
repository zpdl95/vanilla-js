const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  /*이벤트가 발생한 버튼*/
  const btn = event.target;
  /*버튼의 부모 태그를 정함*/
  const li = btn.parentNode;
  /*toDoList에 있는 해당 태그를 삭제*/
  toDoList.removeChild(li);
  /*.filter()함수는 array에서 
  모든 값들을 함수적용하고 true인 것만 모아서 다시 array를 만든다*/
  /*지금은 filterFn함수가 체크된 값만 리턴한다.*/
  const cleanToDos = toDos.filter(function (toDo) {
    /*삭제한 id를 제외한 나머지 id를 반환*/
    return toDo.id !== parseInt(li.id);
  });
  /*새롭게 생성한 리스트로 원리스트를 대체*/
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  /*로컬저장소에 키값을 TODOS_LS로, 벨류값을 '문자열로 전환'한 toDos리스트를 저장*/
  /*문자열로 저장하는 이유는 로컬저장소는 문자열만 저장하기 때문*/
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  /*비어있는 리스트의 길이로 시작하기때문에 +1로 아이디값을 줌*/
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  /*클릭하는 이벤트를 받고 뒤에있는 함수에 적용*/
  delBtn.addEventListener("click", deleteToDo);
  /*span안에 작성한 내용을 넣음*/
  span.innerText = text;
  /*.appendChild은 자식으로서 안으로 넣어버림*/
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.id = newId;
  /*toDoObj 해야할일 오브젝트를 생성*/
  const toDoObj = {
    id: newId,
    text: text,
  };
  /*위의 오브젝트를 toDos리스트에 추가*/
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  /*이벤트가 발생하고 다음으로 넘어가는 동작을 초기화시킴
  (아무것도 발생안함, 리셋도 안됨)*/
  event.preventDefault();
  /*작성하는 부분의 값을 객체로 생성*/
  const currentValue = toDoInput.value;
  /*작성한 내용을 HTML에 출력*/
  paintToDo(currentValue);
  /*작성할 부분을 공백으로 만듬*/
  toDoInput.value = "";
}

function loadToDos() {
  /*로컬저장소에 있는 해당키 값을 불러옴*/
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    /*문자열로 저장된 값을 '자바스트립트 데이터로 변환'*/
    const parsedToDos = JSON.parse(loadedToDos);
    /*forEach함수는 이 함수 안에있는 toDo인자 값들을
    내부에 있는 함수로 한번씩 다 통과시킴*/
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  /*작성하는 부분에서 제출이벤트가 발생하면 뒤 함수를 작동*/
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
