const logItems = function (array) {
  for (let i = 1; i < array.length; i++) {
    console.log(`${i} - ${array[i - 1]}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log("Начало програмы");
console.log(
  'первый вызов logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);'
);
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
console.log("вторй вызов logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);");
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
console.log("Третий вызов logItems([sdfsdfsdf, 10, yryrrrr]);");
logItems("sdfsdfsdf");
