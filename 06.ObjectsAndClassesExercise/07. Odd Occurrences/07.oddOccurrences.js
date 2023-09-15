function printOddOccurrences(input) {
  let word = {};

  for (let element of input.split(" ")) {
    let wordInInput = element.toLowerCase();
    if (!word[wordInInput]) {
      word[wordInInput] = 1;
    } else {
      word[wordInInput]++;
    }
  }

  let filtered = Object.values(word)
    .filter((x) => x % 2 === 1)
    .sort((a, b) => b[1] - a[1]);

  for (const [key, value] of filtered) {
    console.log(`${key} ${value}`);
  }
}

printOddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
printOddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
