function extractText() {
  const htmlElements = Array.from(document.getElementsByTagName("li"));
  const textAreaElement = document.getElementById("result");

  for (const element of htmlElements) {
    textAreaElement.value += element.textContent + " " + "\n";
  }

  //console.log(textAreaElement.value.join("\n"));
}
