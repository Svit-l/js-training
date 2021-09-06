// Задача: поиск самого длинного слова
// Задание
// Напиши функцию findLongestWord(string),
// которая принимает произвольную строку состоящую только из слов разделённых пробелом(параметр string)
// и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

function findLongestWord(string) {
  // Change code below this line
  let array = string.split(" ");
  // console.log(array);
  let lengthWord = 0;
  let longestWord = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= lengthWord) {
      lengthWord = array[i].length;
      longestWord = array[i];
      // console.log(lengthWord);
      // console.log(array[i]);
    }
  }
  return longestWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));
