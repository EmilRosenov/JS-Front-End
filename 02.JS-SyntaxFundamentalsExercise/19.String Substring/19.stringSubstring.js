function findWordInText(word, text) {
    let textToLower=text.toLowerCase();
    let wordToLowerCase = word.toLowerCase();

    if (textToLower.includes(wordToLowerCase)) {
         console.log(`${word}`);
         return;
        }

         console.log(`${word} not found!`);
  }

  findWordInText('javascript',
  'JavaScript is the best programming language'
  );

  findWordInText('python',
  'JavaScript is the best programming language'
  );



  function findWordInText(word, text) {
    const lowerCaseWord = word.toLowerCase();
    const wordsInText = text.split(' '); // Split text by whitespace
    
    for (const textWord of wordsInText) {
      if (textWord.toLowerCase() === lowerCaseWord) {
        console.log(`${word}`);
        return; // Stop the program
      }
    }
    
    console.log(`${word} not found!`);
  }