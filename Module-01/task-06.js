let input;
let total = 0;

while (input !== null) {
  input = prompt("Введи число");

  if (input !== null) {
    let num = Number(input);

    if (Number.isNaN(num)) {
      alert("Было введено не число, попробуйте еще раз");
    } else {
      total += num;
    }
  }
}

alert(`Общая сумма чисел равна ${total}`);
