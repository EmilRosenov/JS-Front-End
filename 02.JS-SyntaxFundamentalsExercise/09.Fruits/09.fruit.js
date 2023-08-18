function calculateNeededMoney(fruitType, weightInGrams,pricePerKilo){
    let price=0;
    let weightInKilos = weightInGrams / 1000;
    price = weightInKilos * pricePerKilo;

    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`);

}

calculateNeededMoney('orange', 2500, 1.80);
calculateNeededMoney('apple', 1563, 2.35);