const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(clients.includes("Poly"));

console.log(clients.push("Zina", "Lada", "Geva"));
console.log(clients);

const newArray = [...clients, ...numbers];
console.log(newArray);

// const clientsAdd = clients.pop();
// console.log(clientsAdd);
// clients.length = 5;
// console.log(clients);

// console.log(clients.join(" "));

console.log(newArray.unshift("Doly", 3, 5, "nady"));
console.log(newArray);

console.log(newArray.splice(1, 3));
console.log(newArray);
