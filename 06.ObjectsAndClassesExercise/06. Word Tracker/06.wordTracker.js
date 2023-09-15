function countOccurrences(input) {
  let searchedWords = input.shift().split(" ");
  let words = [];

  for (const word of searchedWords) {
    let count = input.filter((w) => w === word).length;
    words[word] = count;
  }

  let sorted = Object.entries(words).sort((wordA, wordB) => {
    let [_wordNameA, countA] = wordA;
    let [_wordNameB, countB] = wordB;
    return countB - countA;
  });

  for (let [word, count] of sorted) {
    console.log(`${word} - ${count}`);
  }
}
countOccurrences([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

countOccurrences([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
