// Итерация по массиву
// Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

// Задание
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// Тесты
// Объявлена переменная fruits
// Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
// Объявлена переменная i - счётчик цикла
// Начальное значение переменной i равно 0
// Условие цикла приводится к true до тех пор, пока i меньше 4
// На каждой итерации значение переменной i увеличивается на единицу
// В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
// В теле цикла for используется вывод в консоль переменной fruit

const fruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[i]);
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }
