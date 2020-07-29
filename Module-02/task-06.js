let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число");

  if (input !== null) {
    if (!Number.isNaN(parseInt(input))) {
      numbers.push(parseInt(input));
    } else {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
  }
} while (input === null);

for (const element of numbers) {
  total += element;
}
console.log(`'Общая сумма чисел равна ${total}'`);
