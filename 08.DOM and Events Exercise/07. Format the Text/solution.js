function solve() {
  const textInputField = document.getElementById("input");
  const outputField = document.getElementById("output");
  let text = textInputField.value;
  let sentences = text.split(".");
  sentences.pop();
  const parentDiv = document.getElementById("output");

  while (sentences.length > 0) {
    let current = "";
    current = sentences.splice(0, 3).map((p) => p.trimStart());
    const paragraph = document.createElement("p");
    paragraph.textContent = current.join(".") + ".";

    // if (!paragraph.textContent.endsWith(".")) {
    //   paragraph.textContent += ".";
    // }
    parentDiv.appendChild(paragraph);
  }
}
