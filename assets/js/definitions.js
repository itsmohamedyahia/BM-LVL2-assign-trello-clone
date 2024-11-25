// CardStruct -> NONE
// takes a card element (html, css) and append them to an element
export function addCard(input, list) {
  list.appendChild(input());
}

// NONE -> CardEl
export function createInputEl() {
  const input = document.createElement("input");
  setAttributes(input, {
    placeholder: `Task ${setTaskNom()}`,
    type: "text",
  });
  return input;
}

// export function createCard(inputText, list) {
//   // take input text and list and a card
// }

// ================================================
// SECONDARY FUNCTIONS
function setAttributes(el, attribObj) {
  for (const attrib in attribObj) {
    el.setAttribute(attrib, attribObj[attrib]);
  }
}

let taskIncrementer = 1;
function setTaskNom() {
  return taskIncrementer++;
}
