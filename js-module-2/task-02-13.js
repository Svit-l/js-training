// Задача: генератор slug
// Задание
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире
// Тесты
// Объявлена функция slugify(title)
// Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
// Вызов slugify("English for developer") возвращает "english-for-developer"
// Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
// Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"

function slugify(title) {
  // Change code below this line
  const titleLowerCase = title.toLowerCase();
  const newTitle = titleLowerCase.split(" ");
  const slug = newTitle.join("-");
  return slug;
  // Change code above this line
}

console.log(slugify("Arrays for begginers"));

console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// function string_to_slug(str) {
//   str = str.replace(/^\s+|\s+$/g, ""); // trim
//   str = str.toLowerCase();

//   // remove accents, swap ñ for n, etc
//   var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
//   var to = "aaaaeeeeiiiioooouuuunc------";
//   for (var i = 0, l = from.length; i < l; i++) {
//     str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
//   }

//   str = str
//     .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
//     .replace(/\s+/g, "-") // collapse whitespace and replace by -
//     .replace(/-+/g, "-"); // collapse dashes

//   return str;
// }
