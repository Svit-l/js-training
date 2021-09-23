// Задача. Коллекция значений свойства
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const propNames = [];

  for (const product of products) {
    if (product[propName]) {
      propNames.push(product[propName]);
    }
  }
  return propNames;
  // Change code above this line
}


// function getAllPropValues(propName) {
//   for (const product of products) { - перебрали массив
//     console.log(product); - на каждой итерации вывели объект
//     if (product[propName]) {  - сделали проверку, что в объекте есть свойство
// условие возвращает true или false, следовательно дословный перевод - в продукте есть свойство propName?
//       console.log(`contains ${propName}`); - если true вывели эту консоль
//       continue; -условие выполнилось, пошли на следующую итерацию
//      }
//     console.log(`not contains ${propName}`); - если false вывели эту консоль
//   }
// }


console.log(getAllPropValues("name"));
console.log(getAllPropValues("category"));
