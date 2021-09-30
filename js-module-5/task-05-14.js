// Задача: конструктор строк 2.0
// Задание
// Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder

// Свойство value в классе StringBuilder объявлено приватным

// В классе StringBuilder объявлен метод getValue

// В классе StringBuilder объявлен метод padEnd

// В классе StringBuilder объявлен метод padStart

// В классе StringBuilder объявлен метод padBoth

// В результате вызова new StringBuilder('.') значение переменной builder это объект

// У объекта builder нет свойства value

// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .

// Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.

// Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^

// Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=

// ============Исходный код задачи
// class StringBuilder {
//   // Change code below this line

//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ++++++++++++++Решение
class StringBuilder {
  // Change code below this line
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
