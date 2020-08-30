const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

//Напиши скрипт, который для каждого элемента массива ingredients
//создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.
//Для создания DOM-узлов используй document.createElement().

const ingredientsUlRef = document.querySelector("#ingredients");

const ingredientsHtml = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsUlRef.append(...ingredientsHtml);
