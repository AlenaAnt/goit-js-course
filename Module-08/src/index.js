import images from "./gallery-items.js";
let imagesLi = "";

const galleryHtml = images.reduce((imagesLi, image) => {
  return (imagesLi += `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`);
}, "");

const gallery = document.querySelector(".gallery");
const modalWindow = document.querySelector(".lightbox");
const img = modalWindow.querySelector(".lightbox__image");
const modalWindowKeyControl = (event) => {
  console.log(event);
  if (event.key === "Escape") {
    closeModalWindow();
  }
};
const closeModalWindow = () => {
  document.removeEventListener("keydown", modalWindowKeyControl);
  modalWindow.classList.remove("is-open");
  img.src = "";
};

gallery.insertAdjacentHTML("beforeEnd", galleryHtml);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const { target, currentTarget } = event;
  if (target.classList.contains("gallery__image")) {
    img.src = target.dataset.source;
    document.addEventListener("keydown", modalWindowKeyControl);
    modalWindow.classList.add("is-open");
  }
});
modalWindow.addEventListener("click", () => {
  const { target, currentTarget } = event;
  if (
    target.dataset.action === "close-lightbox" ||
    target.classList.contains("lightbox__overlay")
  ) {
    closeModalWindow();
  }
});
