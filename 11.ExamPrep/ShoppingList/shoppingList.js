function solve(initialList) {
  let products = [];
  let splitted = [];
  splitted = [...initialList][0];
  initialList = initialList.slice(1, initialList.length);
  products = splitted.split("!");

  let counter = 0;
  let input = [];
  let splittedList = [];

  initialList.forEach((element) => {
    splittedList.push(element);
  });
  //   splittedList = initialList.split(", ");
  //input = splittedList[counter];

  while (splittedList[counter] != "Go Shopping!") {
    input = splittedList[counter];

    let command = String;
    let item = String;
    command = input.split(" ")[0];
    item = input.split(" ")[1];

    if (command === "Urgent") {
      if (!products.includes(item)) {
        products.unshift(item);
      }
    } else if (command === "Unnecessary") {
      if (products.includes(item)) {
        let indexOfItem = products.indexOf(item);
        products.splice(indexOfItem, 1);
      }
    } else if (command === "Correct") {
      let newItem = input.split(" ")[2];

      if (products.includes(item)) {
        let indexOfOldItem = products.indexOf(item);
        products.splice(indexOfOldItem, 1, newItem);
      }
    } else if (command === "Rearrange") {
      if (products.includes(item)) {
        let indexItem = products.indexOf(item);
        products.splice(indexItem, 1);
        products.push(item);
      }
    }

    counter++;
    if (input === "Go Shopping!") {
      break;
    }
  }

  return products.join(", ");
}

console.log(
  solve([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!",
  ])
);

console.log(
  solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
  ])
);
