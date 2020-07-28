const delivery = prompt("Выберите страну доставки");
const PRICE_CHINA = 100;
const PRICE_CHILE = 250;
const PRICE_AVSTRALIYA = 100;
const PRICE_INDIYA = 100;
const PRICE_JAMAYKA = 100;
if (delivery !== null) {
  switch (delivery.toLowerCase()) {
    case "китай":
      alert(
        `Доставка в ${delivery.toLowerCase()} будет стоить ${PRICE_CHINA} кредитов`
      );
      break;
    case "чили":
      alert(
        `Доставка в ${delivery.toLowerCase()} будет стоить ${PRICE_CHILE} кредитов`
      );
      break;
    case "австралия":
      alert(
        `Доставка в ${delivery.toLowerCase()} будет стоить ${PRICE_AVSTRALIYA} кредитов`
      );
      break;
    case "индия":
      alert(
        `Доставка в ${delivery.toLowerCase()} будет стоить ${PRICE_INDIYA} кредитов`
      );
      break;
    case "ямайка":
      alert(
        `Доставка в ${delivery.toLowerCase()} будет стоить ${PRICE_JAMAYKA} кредитов`
      );
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
