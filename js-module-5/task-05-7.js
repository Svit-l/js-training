// Конструктор класса
// Для инициализации экземпляра в классе есть метод constructor. Если он не объявлен, создаётся конструктор по умолчанию - пустая функция, которая не изменяет экземпляр.

// class User {
//   // Синтаксис объявления метода класса
//   constructor(name, email) {
//     // Инициализация свойств экземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
// Вызов класса с оператором new приводит к созданию нового объекта и вызову конструктора в контексте этого объекта. То есть this внутри конструктора будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.

// Свойства name и email называются публичные свойства, потому что они будут собственными свойствами объекта-экземпляра и к ним можно будет получить доступ обратившись через точку.

// Задание
// Добавь классу Car метод constructor который принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// Тесты
// Объявлен класс Car
// У класса Car есть метод constructor
// В результате вызова new Car("Audi", "Q3", 36000) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// В результате вызова new Car("BMW", "X5", 58900) получится объект { brand: "BMW", model: "X5", price: 58900 }
// В результате вызова new Car("Nissan","Murano", 31700) получится объект { brand: "Nissan", model: "Murano", price: 31700 }

// ============Исходный код задачи
// class Car {
//   // Change code below this line

//   // Change code above this line
// }

// ++++++++++++++Решение

class Car {
  // Change code below this line
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

console.log(new Car("Audi", "Q3", 36000));
console.log(new Car("BMW", "X5", 58900));
console.log(new Car("Nissan", "Murano", 31700));
