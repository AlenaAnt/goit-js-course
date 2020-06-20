let delivery = prompt("Выберите страну доставки");

if (delivery !== null) {
  console.log((delivery = delivery.toLowerCase()));
}
let price;

switch (delivery) {
  case "китай":
    price = 100;
    break;
  case "чили":
    price = 250;
    break;
  case "австралия":
    price = 170;
    break;
  case "индия":
    price = 80;
    break;
  case "ямайка":
    price = 120;
    break;
  default:
    price = -1;
}
if (price !== -1) {
  delivery = delivery.charAt(0).toUpperCase() + delivery.slice(1);
  alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
} else {
  alert("В вашей стране доставка не доступна");
}
