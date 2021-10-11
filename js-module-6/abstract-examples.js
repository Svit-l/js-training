// +++++++++++++++++Abstract-example-1

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

// +++++++++++++++++Abstract-example-2
const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "24px";
console.log(listWithId);

const listWithClass = document.querySelector(".menu");
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = "tomato";
console.log(firstMenuItem);
