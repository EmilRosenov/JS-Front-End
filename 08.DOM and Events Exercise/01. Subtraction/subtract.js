function subtract() {
  const firstElementField = document.getElementById("firstNumber");
  const secondElementField = document.getElementById("secondNumber");

  const firstElement = Number(firstElementField.value);
  const secondElement = Number(secondElementField.value);

  const resultField = document.getElementById("result");
  //console.log(firstElement);
  //console.log(secondElement);

  resultField.textContent = firstElement - secondElement;
  const result = resultField.textContent;
  //console.log(result);
}
