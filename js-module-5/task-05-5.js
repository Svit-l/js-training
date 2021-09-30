// Задача: цепочка прототипов
// Задание
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// Тесты
// Объявлена переменная ancestor
// Значение переменной ancestor это объект.
// Объявлена переменная parent
// Значение переменной parent это объект.
// Объявлена переменная child
// Значение переменной child это объект.
// Вызов ancestor.isPrototypeOf("parent") возвращает true
// Вызов parent.isPrototypeOf("child") возвращает true
// Вызов ancestor.hasOwnProperty("surname") возвращает true
// Обращение к ancestor.surname возвращает "Dawson"
// Вызов parent.hasOwnProperty("surname") возвращает true
// Обращение к parent.surname возвращает "Moore"
// Вызов child.hasOwnProperty("surname") возвращает false
// Обращение к child.surname возвращает "Moore"
// Вызов ancestor.hasOwnProperty("heritage") возвращает true
// Обращение к ancestor.heritage возвращает "Irish"
// Вызов parent.hasOwnProperty("heritage") возвращает false
// Обращение к parent.heritage возвращает "Irish"
// Вызов child.hasOwnProperty("heritage") возвращает false
// Обращение к child.heritage возвращает "Irish"
// Используется метод Object.create()

// ============Исходный код задачи
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = {};
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = {};
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// ++++++++++++++Решение
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Change code above this line

console.log(ancestor.isPrototypeOf("parent")); //true
console.log(parent.isPrototypeOf("child")); //true
console.log(ancestor.hasOwnProperty("surname")); //true
console.log(ancestor.surname); //"Dawson"
console.log(parent.hasOwnProperty("surname")); //true
console.log(parent.surname); //"Moore"
console.log(child.hasOwnProperty("surname")); //false
console.log(child.surname); //"Moore"
console.log(ancestor.hasOwnProperty("heritage")); //true
console.log(ancestor.heritage); //"Irish"
console.log(parent.hasOwnProperty("heritage")); //false
console.log(parent.heritage); //"Irish"
console.log(child.hasOwnProperty("heritage")); //false
console.log(child.heritage); //"Irish"
