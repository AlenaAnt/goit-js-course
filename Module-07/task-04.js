// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения
//и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и
// обновление интерфейса

document.addEventListener("DOMContentLoaded", () => {
  // const valueRef = document.querySelector("#value");
  // let counterValue = 0;
  // const decrementBtnRef = document.querySelector(
  //   '#counter > [data-action="decrement"]'
  // );
  // const incrementBtnRef = document.querySelector(
  //   '#counter > [data-action="increment"]'
  // );
  // const increment = function () {
  //   counterValue += 1;
  //   valueRef.textContent = counterValue;
  // };
  // const decrement = function () {
  //   counterValue = counterValue - 1;
  //   valueRef.textContent = counterValue;
  // };
  // decrementBtnRef.addEventListener("click", decrement);
  // incrementBtnRef.addEventListener("click", increment);

  const valueRef = document.querySelector("#value");
  let counterValue = 0;
  const decrementBtnRef = document.querySelector(
    '#counter > [data-action="decrement"]'
  );
  const incrementBtnRef = document.querySelector(
    '#counter > [data-action="increment"]'
  );
  const increment = () => (valueRef.textContent = ++counterValue);
  const decrement = () => (valueRef.textContent = --counterValue);

  decrementBtnRef.addEventListener("click", decrement);
  incrementBtnRef.addEventListener("click", increment);
});
