const findLongestWord = function (string) {
  let arrOfString = string.split(" ");
  let result,
    len = -Infinity;
  for (let i = 0; i < arrOfString.length; i++) {
    if (arrOfString[i].length > len) {
      //if (3 > -ббесконечность//true
      len = arrOfString[i].length; //len 3
      result = arrOfString[i];
    }
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

// функция(принимает строку)
// 1) получаем массив слов
// 2) считаем длину каждого слова в массиве
// 3)находим самое длинное слово
// 4)вернуть это слово
