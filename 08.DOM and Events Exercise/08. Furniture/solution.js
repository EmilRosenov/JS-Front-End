function solve() {
  const [generateTextArea, buyTextArea] = Array.from(
    document.getElementsByTagName("textarea")
  );
  const [generateButton, buyButton] = Array.from(
    document.getElementsByTagName("button")
  );

  const tbody = document.querySelector(".table > tbody");

  generateButton.addEventListener("click", generateHandler);
  buyButton.addEventListener("click", buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    //console.log(data);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement("tr", "", tbody);
      const firstColumnTd = createElement("td", "", tableRow);
      createElement("img", "", firstColumnTd, "", "", { src: img });
      const secondColumn = createElement("td", "", tableRow);
      createElement("p", name, secondColumn);
      const thirdColumn = createElement("td", "", tableRow);
      createElement("p", price, thirdColumn);
      const fourthColumn = createElement("td", "", tableRow);
      createElement("p", decFactor, fourthColumn);
      const fifthColumn = createElement("td", "", tableRow);
      createElement("input", "", fifthColumn, "", "", { type: "checkbox" });
    }
  }

  function buyHandler() {
    const allChecked = Array.from(
      document.querySelectorAll("tbody tr input:checked")
    );

    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const input of allChecked) {
      const tableRow = input.parentElement.parentElement;
      const [_firstColumn, secondColumn, thirdColumn, fourthColumn] =
        Array.from(tableRow.children);
      let item = secondColumn.children[0].textContent;
      boughtItems.push(item);
      //console.log(tableRowChildren[1].textContent);
      let currentPrice = Number(thirdColumn.children[0].textContent);
      totalPrice += currentPrice;
      let currentDecFactor = Number(fourthColumn.children[0].textContent);
      totalDecFactor += currentDecFactor;
    }

    buyTextArea.value += `Bought furniture: ${boughtItems.join(", ")}\n`;
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value += `Average decoration factor: ${
      totalDecFactor / boughtItems.length
    }`;
    // console.log(boughtItems.join(", "));
    // console.log(totalPrice.toFixed(2));
    // console.log(totalDecFactor / boughtItems.length);
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);
    if (content && type !== "input") {
      htmlElement.textContent = content;
    }
    if (content && type === "input") {
      htmlElement.value = content;
    }
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
    if (id) {
      htmlElement.id = id;
    }
    if (classes) {
      htmlElement.classList.add(...classes);
    }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    return htmlElement;
  }
}
