let delivery = prompt("Выберите страну доставки");

let price; //undefind
if (delivery !== null) {
  console.log((delivery = delivery.toLowerCase()));
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
  }

  if (price !== undefined) {
    delivery = delivery.charAt(0).toUpperCase() + delivery.slice(1);
    alert(`Доставка в ${delivery} будет стоить ${price} кредитов`);
  } else {
    alert("В вашей стране доставка не доступна");
  }
} else {
  console.log("Отменено пользователем");
}
