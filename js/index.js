const btnNavs = document.querySelectorAll(".menu__btn-nav");
const menuContents = document.querySelectorAll(".menu__content-child");
const tabs = document.querySelectorAll(".menu__tab");
const locations = document.querySelectorAll(".menu__tab-contents");
const tableTabs = document.querySelectorAll(".menu__tab-table");
const contentTable = document.querySelectorAll(".menu__bottom");

function activateElements(
  buttons,
  contents,
  activeButtonClass,
  activeContentClass,
  buttonAttr,
  contentAttr
) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove(activeButtonClass));

      button.classList.add(activeButtonClass);

      contents.forEach((content) => {
        if (content.dataset[contentAttr] === button.dataset[buttonAttr]) {
          content.classList.add(activeContentClass);
          console.log(content.dataset[contentAttr])
        } else {
          content.classList.remove(activeContentClass);
        }

      });
    });
  });
}

activateElements(
  btnNavs,
  menuContents,
  "activeBtn",
  "activeContent",
  "target",
  "content"
);

activateElements(tabs, locations, "activeTab", "activeContent", "tab", "info");

activateElements(
  tableTabs,
  contentTable,
  "activeTab",
  "activeContent",
  "tab",
  "info"
);

const btnModalCreate = document.querySelector(".menu__btn-create");
const modalCreate = document.querySelector(".modal__create");
const btnModalEdits = document.querySelectorAll(".menu__btn-edit");
const modalBg = document.querySelector(".modal__bg");
const modalEdit = document.querySelector(".modal__edit");
const forms = document.querySelectorAll(".modal__form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

btnModalCreate.addEventListener("click", () => {
  modalBg.classList.add("modalActive");
  modalEdit.classList.remove("modalActive");
});

btnModalEdits.forEach((btnModalEdit) => {
  btnModalEdit.addEventListener("click", (e) => {
    modalBg.classList.add("modalActiveEdit");
    modalCreate.classList.remove("modalActive");
  });
});

window.addEventListener("click", (e) => {
  if (
    !e.target.closest(".menu__btn-create") &&
    !e.target.closest(".modal__create") &&
    !e.target.closest(".menu__btn-edit") &&
    !e.target.closest(".modal__edit")
  ) {
    modalBg.classList.remove("modalActive");
    modalBg.classList.remove("modalActiveEdit");
    modalCreate.classList.remove("modalActive");
    modalEdit.classList.remove("modalActiveEdit");
  }
});

const openAccords = document.querySelectorAll(".menu__accord-open");
const openChildAccords = document.querySelectorAll(".menu__child-open");

openAccords.forEach((accord) => {
  accord.addEventListener("click", (e) => {
    const item = e.target.closest(".menu__accord-main");

    item.classList.toggle("activeAccordion");
  });
});

openChildAccords.forEach((accord) => {
  accord.addEventListener("click", (e) => {
    const item = e.target.closest(".menu__last-content");
    item.classList.toggle("activeChildAccordion");
  });
});
