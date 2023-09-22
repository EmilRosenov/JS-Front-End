function addItem() {
  const li = document.createElement("li");
  const inputText = document.getElementsByTagName("input")[0];
  li.textContent = inputText.value;
  const parent = document.getElementById("items");
  parent.appendChild(li);
  inputText.value = "";
}
