// Задача: склад 2.0
// Задание
// Выполни рефакторинг класса Storage, сделав свойство items приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс Storage
// У объекта storage нет свойства items
// В классе Storage объявлен метод getItems
// В классе Storage объявлен метод addItem
// В классе Storage объявлен метод removeItem
// Свойство items в классе Storage объявлено приватным
// Конструктор класса принимает свойство items
// В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
// Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]

// ============Исходный код задачи
// class Storage {
//   // Change code below this line

//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.items = this.items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// ++++++++++++++Решение
class Storage {
  // Change code below this line
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
