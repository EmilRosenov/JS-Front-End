function fillMatrix(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(number);
  }

  for (let j = 0; j < number; j++) {
    console.log(arr.join(" "));
  }
}

//fillMatrix(3);
fillMatrix(7);
