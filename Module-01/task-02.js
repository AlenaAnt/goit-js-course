const total = 100;
const ordered = 50;

if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else if (ordered === total) {
  console.log("Вы вовремя! Забрали последний.");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
