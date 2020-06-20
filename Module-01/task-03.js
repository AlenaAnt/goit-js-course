const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const USER_DATA = prompt("Введите пароль");
if (USER_DATA === null) {
  console.log("Отменено пользователем!");
} else if (USER_DATA === ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
} else {
  console.log("Доступ запрещен, неверный пароль!");
}
