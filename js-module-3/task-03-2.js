// Вложенные свойства
// Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.

// Например, статистика пользователя социальной сети состоит из количества последователей, просмотров и лайков, и хранить эти данные удобнее всего в виде объекта. Тоже самое с местоположением, отдельно страна и город.

// В будущем это можно будет использовать для поиска пользователей по стране, городу, минимальному или максимальному количеству последователей и т. д.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// Задание
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".
// Тесты
// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tag со значениями
// В объекте apartment есть свойство owner
// Значение свойства owner это объект
// В объекте owner есть свойство name
// Значение свойства name это "Henry"
// В объекте owner есть свойство phone
// Значение свойства phone это "982-126-1588"
// В объекте owner есть свойствао email
// Значение свойства email это "henry.carter@aptmail.com"

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

console.log(apartment);
