let credits = 23580;
const PRICE_PER_DROID = 3000;
const USER_AMOUNT_DROID = prompt("Укажите количество");
let totalPrice;
if (USER_AMOUNT_DROID === null) {
  console.log("Отменено пользователем!");
} else if (!Number(USER_AMOUNT_DROID)) {
  console.log("не число");
} else {
  totalPrice = PRICE_PER_DROID * Number(USER_AMOUNT_DROID);
}
if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${USER_AMOUNT_DROID} дроидов, на счету осталось ${
      credits - totalPrice
    }, кредитов.`
  );
}
