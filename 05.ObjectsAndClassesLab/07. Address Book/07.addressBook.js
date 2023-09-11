function sortAddressBook(input) {
  let person = {};

  for (let line of input) {
    let [name, address] = line.split(":");

    person[name] = address;
  }

  for (let key of Object.keys(person).sort()) {
    console.log(`${key} -> ${person[key]}`);
  }
}

sortAddressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
