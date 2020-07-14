const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const USER_DATA = prompt("Введите пароль");
if (USER_DATA === null) {
  alert(`Отменено пользователем!`);
} else if (USER_DATA === ADMIN_PASSWORD) {
  alert(`Добро пожаловать!`);
} else {
  alert(`Доступ запрещен, неверный пароль!`);
}
