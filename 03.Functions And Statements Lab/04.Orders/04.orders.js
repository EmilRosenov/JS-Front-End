function printTotalPrice(beverage, quantity) {
  function sum(input, numberOfOrders) {
    let price = Number();
    let total = Number();
    if (input === "coffee") {
      price = 1.5;
      total = numberOfOrders * price;
    } else if (input === "water") {
      price = 1.0;
      total = numberOfOrders * price;
    } else if (input === "coke") {
      price = 1.4;
      total = numberOfOrders * price;
    } else if (input === "snacks") {
      price = 2.0;
      total = numberOfOrders * price;
    }

    return console.log(`${total.toFixed(2)}`);
  }
  sum(beverage, quantity);
}

printTotalPrice("water", 5);
printTotalPrice("coffee", 2);
