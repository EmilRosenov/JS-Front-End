function isPalindrome(numbers) {
  let numbersArray = [];
  let boolArray = [];

  for (let index = 0; index < numbers.length; index++) {
    numbersArray.push(numbers[index]);
  }

  for (let i = 0; i < numbersArray.length; i++) {
    let current = "";
    let reversed = "";
    current = numbersArray[i].toString();
    current = [...current];
    reversed = [...current].reverse();

    if (current[0] === reversed[0] && current[1] === reversed[1]) {
      boolArray.push(true);
      // current /= 10;
    } else {
      boolArray.push(false);
    }
  }
  return console.log(`${boolArray.join("\n")}`);
}

isPalindrome([123, 323, 421, 121]);
isPalindrome([32, 2, 232, 1010]);
