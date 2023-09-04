function isPerfect(num) {
  let divisors = [];

  for (let current = 1; current < num; current++) {
    if (num % current === 0) {
      divisors.push(current);
    }
  }
  //   console.log(divisors.join(" "));

  let divisorsSum = divisors.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );
  if (divisorsSum === num) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}

isPerfect(6);
isPerfect(28);
isPerfect(1236498);
