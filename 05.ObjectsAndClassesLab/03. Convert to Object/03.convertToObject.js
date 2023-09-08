function convertToObject(jsonFile) {
  let person = JSON.parse(jsonFile);

  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
