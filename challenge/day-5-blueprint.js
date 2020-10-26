// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const addTaskForm = document.querySelector(".js-addTask"),
  addTaskInput = document.querySelector("input"),
  pending = document.querySelector(".js-pending"),
  finished = document.querySelector(".js-finished");

const ADDPENDING_LS = "pending";
const ADDFINISHED_LS = "finished";
let addPendingList = [];
let addFinishedList = [];

function returnTask(event) {
  deleteTask(event);
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span").innerText;
  paintPendingTask(text);
}

function moveFinished(event) {
  deleteTask(event);
  const btn = event.target;
  const li = btn.parentNode;
  const btnrtn = document.createElement("button");
  btnrtn.innerText = "🔄";
  li.removeChild(btn);
  li.appendChild(btnrtn);
  finished.appendChild(li);
  const addTaskObj = {
    id: parseInt(li.id),
    text: li.querySelector("span").innerText
  };
  addFinishedList.push(addTaskObj);
  saveTask();
  btnrtn.addEventListener("click", returnTask);
}

function deleteTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
  const cleanPending = addPendingList.filter(function (Task) {
    return Task.id !== parseInt(li.id);
  });
  addPendingList = cleanPending;

  const cleanFinished = addFinishedList.filter(function (Task) {
    return Task.id !== parseInt(li.id);
  });
  addFinishedList = cleanFinished;
  saveTask();
}

function saveTask() {
  localStorage.setItem(ADDPENDING_LS, JSON.stringify(addPendingList));
  localStorage.setItem(ADDFINISHED_LS, JSON.stringify(addFinishedList));
}

function paintFinishedTask(Task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnDel = document.createElement("button");
  const btnrtn = document.createElement("button");
  const addTaskObj = {
    id: Task.id,
    text: Task.text
  };
  span.innerText = Task.text;
  btnDel.innerText = "❌";
  btnrtn.innerText = "🔄";
  li.id = Task.id;
  li.appendChild(span);
  li.appendChild(btnDel);
  li.appendChild(btnrtn);
  finished.appendChild(li);
  addFinishedList.push(addTaskObj);
  saveTask();
  btnDel.addEventListener("click", deleteTask);
  btnrtn.addEventListener("click", returnTask);
}

function paintPendingTask(currentValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnDel = document.createElement("button");
  const btnCpt = document.createElement("button");
  const newId = Math.ceil(Math.random() * 1000);
  const addTaskObj = {
    id: newId,
    text: currentValue
  };
  span.innerText = currentValue;
  btnDel.innerText = "❌";
  btnCpt.innerText = "✅";
  li.id = newId;
  li.appendChild(span);
  li.appendChild(btnDel);
  li.appendChild(btnCpt);
  pending.appendChild(li);
  addPendingList.push(addTaskObj);
  saveTask();
  btnDel.addEventListener("click", deleteTask);
  btnCpt.addEventListener("click", moveFinished);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = addTaskInput.value;
  paintPendingTask(currentValue);
  addTaskInput.value = "";
}

function loadTask() {
  const loadedPending = localStorage.getItem(ADDPENDING_LS);
  const loadedFinished = localStorage.getItem(ADDFINISHED_LS);
  if (loadedPending !== null) {
    const parsedPendingTask = JSON.parse(loadedPending);
    parsedPendingTask.forEach(function (Task) {
      paintPendingTask(Task.text);
    });
  }
  if (loadedFinished !== null) {
    const parsedFinishedTask = JSON.parse(loadedFinished);
    parsedFinishedTask.forEach(function (Task) {
      paintFinishedTask(Task);
    });
  }
}

function init() {
  loadTask();
  addTaskForm.addEventListener("submit", handleSubmit);
}

init();
