let input;
let total = 0;

do {
  input = prompt("Введи число");
  if (input === null) {
    break;
  }
  if (Number.isNaN(num)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += num;
  }
} while (true);

// while (input !== null) {
//   input = prompt("Введи число");

//   if (input !== null) {
//     let num = Number(input);

//     if (Number.isNaN(num)) {
//       alert("Было введено не число, попробуйте еще раз");
//     } else {
//       total += num;
//     }
//   }
// }
// alert(`Общая сумма чисел равна ${total}`);
