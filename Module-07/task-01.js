const categories = document.querySelectorAll("#categories > .item");
console.log(`В списке ${categories.length} категории.`);

Array.prototype.forEach.call(categories, (element) => {
  const title = element.querySelector("h2").innerHTML;
  const categoriesLength = element.querySelectorAll("li").length;
  console.log(
    `Категория: ${title} / Количество элементов: ${categoriesLength}`
  );
});
