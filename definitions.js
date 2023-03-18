// CardStruct -> NONE
// takes a card element (html, css) and append them to an element
export function addCard(card, list) {
  list.appendChild(card);
}

// NONE -> CardEl
export function createCard() {
  const card = document.createElement("input");
  setAttributes(card, {
    placeholder: `Task ${setTaskNom()}`,
    type: "text",
  });

  return card;
}

function setAttributes(el, attribObj) {
  for (const attrib in attribObj) {
    el.setAttribute(attrib, attribObj[attrib]);
  }
}

function setTaskNom() {
  return 1;
}

console.log(createCard());
