// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается
//  в его атрибуте data-length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector("#validation-input");
const length = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === +length) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
});

inputRef.onfocus = function () {
  if (inputRef.classList.contains("invalid")) {
    this.classList.remove("invalid");
    return;
  }
  if (inputRef.classList.contains("valid")) {
    this.classList.remove("valid");
    return;
  }
};
