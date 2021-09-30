// Методы класса
// Для работы со свойствами будущего экземпляра используются методы класса.
// Методы - это просто функции, но с одним отличием, они доступны экземпляру класса.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// Задание
// Добавь классу Car два метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// Тесты
// В классе Car объявлен метод getPrice
// Метод getPrice возвращает значение свойства price экземпляра класса который его вызывает
// В классе Car объявлен метод changePrice
// Метод changePrice изменяет значение свойства price экземпляра класса который его вызывает

// ============Исходный код задачи

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line

//   // Change code above this line
// }

// ++++++++++++++Решение
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
  // Метод getEmail
  getPrice() {
    return this.price;
  }

  // Метод changeEmail
  changePrice(newPrice) {
    this.price = newPrice;
  }
  // Change code above this line
}

const firstCar = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(firstCar);
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
console.log(firstCar.getPrice());
// console.log(firstCar.changePrice(50000));
