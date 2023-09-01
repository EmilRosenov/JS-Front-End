function printEvenAndOddSum(number) {
  let numberAsString = number.toString().split("");
  let stringAsIntArray = [];
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < numberAsString.length; i++) {
    stringAsIntArray.push(parseInt(numberAsString[i]));
  }
  for (let i = 0; i < stringAsIntArray.length; i++) {
    let element = parseInt(stringAsIntArray[i]);

    if (element % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  }
  return console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printEvenAndOddSum(1000435);
printEvenAndOddSum(3495892137259234);
