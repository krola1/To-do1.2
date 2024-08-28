//defines variables from HTML
const addButton = document.querySelector(".add-item");
const clearButton = document.querySelector(".clear-list");
const inputField = document.getElementById("input-field");
const listHeader = document.getElementById("list-header");
//defines variables for use in script
let toDoList = [];
// let counter = 0; //time will tell if i can do without this
// functions
const clearInputField = () => {
  inputField.value = "";
};
const clearHTML = () => {
  listHeader.innerHTML = "";
};
/// big functions
const fromFieldToArray = () => {
  fieldValue = inputField.value;
  toDoList.push(fieldValue);
};
const fromArrayToHTML = () => {
  counter = 0;
  for (let item in toDoList) {
    listItem = document.createElement("li");
    listItem.setAttribute("id", counter);
    listItemTexst = document.createTextNode(toDoList[item]);
    listItem.appendChild(listItemTexst);
    listHeader.appendChild(listItem);
    counter++;
  }
  counter = 0;
};
addButton.addEventListener("click", () => {
  if (inputField.value !== "") {
    clearHTML();
    fromFieldToArray();
    fromArrayToHTML();
    clearInputField();
  }
});

clearButton.addEventListener("click", () => {
  toDoList = [];
  clearInputField();
  clearHTML();
});

document.addEventListener("click", (removeByClick) => {
  target = removeByClick.target;
  if (target.toString() === "[object HTMLLIElement]") {
    clearHTML();
    toDoList.splice(Number(target.id), 1);
    fromArrayToHTML();
  }
});
