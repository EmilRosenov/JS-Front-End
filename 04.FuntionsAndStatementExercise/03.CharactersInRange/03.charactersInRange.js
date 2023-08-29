function printCharsInRange(first, second) {
  const firstChar = first.charCodeAt(0);
  const secondChar = second.charCodeAt(0);
  let range = [];

  if (firstChar < secondChar) {
    for (let i = firstChar + 1; i < secondChar; i++) {
      let current = String.fromCharCode(i);
      range.push(current);
    }
    console.log(range.join(" "));
  } else {
    for (let i = secondChar + 1; i < firstChar; i++) {
      let current = String.fromCharCode(i);
      range.push(current);
    }
    console.log(range.join(" "));
  }
}

printCharsInRange("a", "d");
printCharsInRange("#", ":");
printCharsInRange("C", "#");
