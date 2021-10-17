// ====================Module6. События

// _______________События клавиатуры
// ++++++++++++ пример из MDN Web Docs
// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.key}`;
// }

// ++++++++++++ пример из конспекта
// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// ++++++++++++++ Событие blur +++++++
// var form = document.getElementById("form");
// form.addEventListener(
//   "focus",
//   function (event) {
//     event.target.style.background = "pink";
//   },
//   true
// );
// form.addEventListener(
//   "blur",
//   function (event) {
//     event.target.style.background = "";
//   },
//   true
// );

// ============Объект события
const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);

// +++++++++++++++++Задачка с Вебинара
//Создать небольшую игру:)
// - Изначально на экране пользователя будет отображаться
//какая - то форма (круг, квадрат, прямоулольник)
// - При нажатии на нее в рандомном порядке форма должна
//меняться на другую
// - Форма каждый раз должна появляться в разных местах на странице
// - Цвет формы в рандомном порядке меняется,
//используя цвета из заранее подготовленного массива

const forms = [
  "width: 100px; height: 100px; border-width: 1px; border-color: #000000",
  "width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000",
  "width: 150px; height: 100px; border-width: 1px; border-color: #000000",
  "width: 200px; height: 100px; border-radius: 100px / 50px;",
  "width: 150px; height: 100px; transform: skew(20deg);",
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomither = (max) => {
  return Math.floor(Math.random() * max);
};
