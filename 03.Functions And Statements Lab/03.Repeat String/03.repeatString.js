function printRepeatedString(text, timesToRepeat) {
  function repeatString(input, n) {
    newText = [];
    for (let i = 1; i <= n; i++) {
      newText.push(input);
    }

    return console.log(newText.join(``));
  }
  repeatString(text, timesToRepeat);
}

printRepeatedString("abc", 3);
printRepeatedString("String", 2);
