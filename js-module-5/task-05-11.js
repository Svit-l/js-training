// Задача: конструктор строк
// Задание
// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку,
// которая записывается на создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
// в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder
// В классе StringBuilder объявлен метод getValue
// Метод getValue возвращает значение свойства value экземпляра класса который его вызывает
// В классе StringBuilder объявлен метод padEnd
// Метод padEnd изменяет свойство value экземпляра класса, который его вызывает
// В классе StringBuilder объявлен метод padStart
// Метод padStart изменяет свойство value экземпляра класса который его вызывает
// В классе StringBuilder объявлен метод padBoth
// Метод padBoth изменяет свойство value экземпляра класса который его вызывает
// В результате вызова new StringBuilder(".") значение переменной builder это объект
// У объекта builder есть свойство value
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
// Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
// Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=

// ============Исходный код задачи

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ++++++++++++++Решение 1
class StringBuilder {
  // Change code below this line

  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line

// // ++++++++++++++Решение 2
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     // возвращает текущее значение свойства value.
//     return this.value;
//   }

//   padEnd(str) {
//     // получает парметр str(строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
//     this.value = this.value + str;
//   }

//   padStart(str) {
//     //- получает парметр str(строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     // - получает парметр str(строку)и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
//     this.value = str + this.value + str;
//   }
// }
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
