// ====================Module6. DOM

// +++++++++++++++++Abstract-example-1. Навигация по DOM

// elem.parentNode - выберет родителя elem.
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
// !!! elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// !!! elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// !!! elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
// !!! elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
// elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
// !!! elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// console.log(list.childNodes);

// console.log(document.querySelectorAll("li"));

// +++++++++++++++++Abstract-example-2. Поиск элементов
// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// +++++++++++++++++Abstract-example-3. Свойства и атрибуты
// value - содержит текущий текстовый контент элементов форм.
// checked - хранит состояние чекбокса или радиокнопки.
// name - хранит значение, указанное в HTML-атрибуте name.
// src - путь к изображению тега <img>.
// // ===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

// +++++++++++++++ Abstract-example-4.Свойство textContent
// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";
// console.log(title.textContent);

// console.log(document.querySelector(".article-title").textContent);

// const body = document.body;
// console.log(body);

// const article = body.firstElementChild;
// console.log(article);

// const title = article.firstElementChild;
// console.dir(title);

// const text = title.nextElementSibling;
// console.log(text);

// +++++++++++++++++Abstract-example-5. Свойство classList
// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class

// console.log(text.classList.contains("is-hidden")); // false

// ++++++++++++++++++ Свойство style
// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "30px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// +++++++++++++++++ Атрибуты
// elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
// elem.getAttribute(name) - получает значение атрибута и возвращает его.
// elem.setAttribute(name, value) - устанавливает атрибут.
// elem.removeAttribute(name) - удаляет атрибут.
// elem.attributes - свойство, возвращает объект всех атрибутов элемента.

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Beautiful nature"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// image.setAttribute("id", "nature");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, 3: id, class: class, src: src, alt: alt, id: id, length: 4}

// +++++++++++++++++ data-атрибуты
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });  //14, 7, 3, 61

//   ++++++++++++++++++++Создание и удаление элементов
// ===================Создание
// // document.createElement(tagName);
// const heading = document.createElement("h1");
// // console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// ===================Добавление
// element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
// element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
// element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
// element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.

// const list = document.querySelector(".usernames");
// console.log(list);

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

// // ===проба
// const text = document.querySelector(".text");
// const subtitle = document.createElement("h2");
// subtitle.textContent = "This is subtitle";
// text.before(subtitle);
// console.log(subtitle);

// ===================Удаление
// const text = document.querySelector(".text");
// text.remove();

// +++++++++++++++++ Свойство innerHTML
//  ==================Чтение
// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// ====================Изменение
// const title = document.querySelector(".article .title");
// console.log(title);

// title.innerHTML = 'New and <span class="accent">improved</span> title';

// ====================Изменение. Однотипная (шаблонная) разметка
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// console.log(technologies);

// const list = document.querySelector(".list");
// console.log(list.innerHTML);
// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");
// console.log(markup);
// // Check the console, you'll see a single string with HTML tags

// // Adding all the markup in one operation
// list.innerHTML = markup;

// ====================Добавление
// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// ====================Добавление. Метод insertAdjacentHTML()

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// +++++++Проба пера
// const technologies = ["HTML", "CSS", "JavaScript"];

// const article = document.querySelector(".article");

// const list = article.insertAdjacentHTML(
//   "beforeend",
//   `<ul class="article-list">Technologies</ul>`
// );

// const markup = technologies
//   .map((technology) => `<li class="article-text">${technology}</li>`)
//   .join("");

// console.log(markup);

// article.insertAdjacentHTML("beforeend", markup);

// console.log(article.innerHTML);
