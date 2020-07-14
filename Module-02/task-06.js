let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число");

  if (input === null) {
    break;
  }

  if (parseInt(input !== NaN)) {
    numbers.push(parseInt(input));
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
} while (true);

for (const element of numbers) {
  total = total + element;
}
console.log(`'Общая сумма чисел равна ${total}'`);
