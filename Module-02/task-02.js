const calculateEngravingPrice = function (message, pricePerWord) {
  let arrayOfStrings = message.split(" ");
  return arrayOfStrings.length * pricePerWord;
};

//retern undefaind

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
// функция(строку с пробелами, стоимость слова)
// 1) посчитать количтво слов в строке
//     посчитала количество пробелов + 1
//    разделил по пробелам

// 2) коливсто слов * на стоимость
// 3) вернула стоимость

// мама мыра раму за 1 слово  50грн за 1 слово
// то есть итого должно стоить 150 грн
