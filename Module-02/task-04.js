const formatString = function (string) {
  if (string.length > 40) {
    return string.substr(0, 40) + "...";
  }
  return string;
};

// Тернарник не работает с return
// const formatString = function (string) {
//   string.length > 40 ? return `${string.slice(0, 40)} ...` : return string;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 152),
  152
);
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
