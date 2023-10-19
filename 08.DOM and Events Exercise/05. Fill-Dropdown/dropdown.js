function addItem() {
  const inputTextField = document.getElementById("newItemText");
  const inputValueField = document.getElementById("newItemValue");
  const optionElement = document.createElement("option");
  const inputText = inputTextField.value;
  const inputValue = inputValueField.value;
  optionElement.textContent = inputText;
  optionElement.value = inputValue;
  const selectElement = document.getElementById("menu");

  if (inputText !== "" && inputValue !== "") {
    selectElement.appendChild(optionElement);
  }
  inputTextField.value = "";
  inputValueField.value = "";
}
