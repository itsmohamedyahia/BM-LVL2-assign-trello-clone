import { addCard, createCard } from "./definitions.js";
// ====================
// ELEMENT SELECTION
// =====================
// const addBtnEl_NS = document.querySelector(".btn--add-not");
// const addBtnEl_Prog = document.querySelector(".btn--add-prog ");
// const addBtnEl_Comp = document.querySelector(".btn--add-comp ");
// // ------------
// const listEl_NS = document.querySelector(".list--card-not");
// const listEl_Prog = document.querySelector(".list--card-prog");
// const listEl_Comp = document.querySelector(".list--card-comp");

const addBtnAllEl = document.querySelectorAll(".btn--add");
const listElAll = document.querySelectorAll(".list--card");

// Buttons, Lists -> addEventLister button to list

let num = 0;
for (const btn of addBtnAllEl) {
  btn.addEventListener("click", addCard.bind(null, createCard, listElAll[num]));
  num = num + 1;
}

// ==========================
// btn.addEventListener("click", addCard.bind(null, createCard, chooseList));
