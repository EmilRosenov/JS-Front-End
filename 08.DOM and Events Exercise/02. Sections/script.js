function create(words) {
  for (const word of words) {
    const wrapper = document.getElementById("content");
    const divElement = document.createElement("div");
    const paragraph = document.createElement("p");
    wrapper.appendChild(divElement);
    divElement.appendChild(paragraph);
    paragraph.textContent = word;
    paragraph.style.display = "none";

    divElement.addEventListener("click", addText);

    function addText(e) {
      paragraph.style.display = "block";
    }
  }
}
