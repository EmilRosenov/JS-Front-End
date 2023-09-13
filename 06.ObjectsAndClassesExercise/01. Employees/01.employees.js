function print(input) {
  let person = {};

  for (const line of input) {
    let name = line.split(",");
    let personalNumber = line.length;
    person[name] = personalNumber;
  }

  let tuples = Object.entries(person);
  for (let [key, value] of tuples) {
    console.log(`Name: ${key} -- Personal Number: ${value}`);
  }
}

print([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
