const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const USER_DATA = prompt("Введите пароль");
if (USER_DATA === null) {
  message = `Отменено пользователем!`;
} else if (USER_DATA === ADMIN_PASSWORD) {
  message = `Добро пожаловать!`;
} else {
  message = `Доступ запрещен, неверный пароль!`;
}
alert(message);
