function convertToJSON(name, lastName, hairColor) {
  let object = { name, lastName, hairColor };

  let objectToJson = JSON.stringify(object);
  return console.log(jsonFile);
}

convertToJSON("George", "Jones", "Brown");
convertToJSON("Peter", "Smith", "Blond");
