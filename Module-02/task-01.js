const logItems = function (array) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      // console.log(array[i]);
      // console.log(i);
      // console.log(i + " - " + array[i]);
      console.log(`${i} - ${array[i]}`);
    }
  } else {
    console.log("Это не массив");
  }
};
//for (let i=0; i<10; i++){}
//for (let element to array){}
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
