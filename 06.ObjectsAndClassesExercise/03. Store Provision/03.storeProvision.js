function products(input, input2) {
  let product = {};
  let line = [...input, ...input2];
  //let currentList = [];

  for (let i = 0; i < line.length; i += 2) {
    let name = line[i];
    let quantity = line[i + 1];
    if (!product.hasOwnProperty(name)) {
      product[name] = Number(quantity);
      //currentList.push(product);
    } else {
      product[name] += Number(quantity);
    }
  }

  let kvp = Object.entries(product);
  for (let [key, value] of kvp) {
    console.log(`${key} -> ${value}`);
  }
}

products(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
