function check(numOne, numbTwo, numThree) {
  const ifPositive = numOne * numbTwo * numThree;

  if (ifPositive > 0) {
    return "Positive"}
  else {
    return "Negative";
  }
}

console.log(check(5, 12, -15));
console.log(check(-6, -12, 14));
console.log(check(-1, -2, -3));
console.log(check(-5, 1, 1));
