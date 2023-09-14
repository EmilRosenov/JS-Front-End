function printHeroInfo(input) {
  let objectList = [];

  for (let line of input) {
    let tokens = line.split(" / ");
    let name = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2].split(", ");

    objectList.push({ name, level, items });
  }

  let sorted = objectList.sort((a, b) => a.level - b.level);

  for (const { name, level, items } of sorted) {
    console.log(`Hero: ${name}`);
    console.log(`level => ${level}`);
    console.log(`items => ${items.join(", ")}`);
  }
}

printHeroInfo([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
