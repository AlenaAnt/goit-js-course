let input;
let total = 0;

do {
  input = prompt("Введи число");
  if (input !== null) {
    if (Number.isNaN(parseFloat(input))) {
      alert("Было введено не число, попробуйте еще раз");
    } else {
      total += +input;
    }
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);

// while (input !== null) {
//   input = prompt("Введи число");

//   if (input !== null) {
//     if (Number.isNaN(num)) {
//       alert("Было введено не число, попробуйте еще раз");
//     }
//     total += num;
//   }
// }
// alert(+`Общая сумма чисел равна ${total}`);
