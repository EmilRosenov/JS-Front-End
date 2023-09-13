function townInfo(input) {
  for (let iterator of input) {
    let town = iterator.split(" | ")[0];
    let latitude = Number(iterator.split(" | ")[1]).toFixed(2);
    let longitude = Number(iterator.split(" | ")[2]).toFixed(2);
    let city = { town, latitude, longitude };
    console.log(city);
  }
}

townInfo(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
