function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  const inputFieldText = document.querySelector("#searchField");

  function onClick() {
    let elementsTd = Array.from(document.querySelectorAll("tbody tr"));

    for (const row of elementsTd) {
      let rowValue = row.innerHTML.trim();
      const searched = inputFieldText.value;
      console.log(rowValue);

      if (row.classList.contains("select")) {
        row.classList.remove("select");
      }

      if (rowValue.includes(searched)) {
        row.classList.add("select");
      }
    }
    inputFieldText.value = "";
  }
}
