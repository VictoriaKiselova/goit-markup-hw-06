const openModalMobMenu = document.querySelector(".mobile-open-button-menu");
const modalMenu = document.querySelector(".mobile-menu");
const closeModalMenu = document.querySelector(".mobile-modal-button-close");
const orderServise = document.querySelector(".order-button");
const modalService = document.querySelector(".backdrop");
const closeModalService = document.querySelector(".modal-button-close");

openModalMobMenu.addEventListener("click", event => {
  modalMenu.classList.add("is-open");
});
closeModalMenu.addEventListener("click", event => {
  modalMenu.classList.remove("is-open");
});
orderServise.addEventListener("click", event => {
  modalService.classList.add("is-open-backdrop");
});
closeModalService.addEventListener("click", event => {
  modalService.classList.remove("is-open-backdrop");
});
