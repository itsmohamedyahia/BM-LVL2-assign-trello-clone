import { addCard, createInputEl } from "./definitions.js";

// ====================
// ELEMENT SELECTION
// =====================
//const addBtnAllEl = document.querySelectorAll(".btn--add");
//const listElAll = document.querySelectorAll(".list--card");

const [addBtnNotEl, addBtnProgEl, addBtnCompEl] =
  document.querySelectorAll(".btn--add");

const [listCardNotEl, listCardProgEl, listCardCompEl] =
  document.querySelectorAll(".list--card");

// ====================
// FUNCTIONALITY
// ====================

// Btns, Lists -> add custom eventlistener to each btn

// addBtnAllEl.forEach((btn) => {
//   btn.addEventListener("click", listHasInputEl && createInputEl.bind(null));
// });

// addBtnNotEl.addEventListener(
//   "click",
//   listHasInputEl && addCard.bind(null, createInputEl, listCardNotEl)
// );

// addBtnProgEl.addEventListener(
//   "click",
//   listHasInputEl && addCard.bind(null, createInputEl, listCardProgEl)
// );

// addBtnCompEl.addEventListener(
//   "click",
//   listHasInputEl && addCard.bind(null, createInputEl, listCardCompEl)
// );

addBtnNotEl.addEventListener("click", function () {
  const parentDiv = addBtnNotEl.parentNode;
  console.log(parentDiv);
  const input = parentDiv.querySelector("input");
  if (input) {
    return;
  } else {
    addCard(createInputEl, listCardNotEl);
  }
});

addBtnProgEl.addEventListener(
  "click",
  listHasInputEl && addCard.bind(null, createInputEl, listCardProgEl)
);

addBtnCompEl.addEventListener(
  "click",
  listHasInputEl && addCard.bind(null, createInputEl, listCardCompEl)
);

function listHasInputEl() {
  return true;
}
