function personInfo(firstName, lastName, age) {
  age = Number(age);
  let person = { firstName, lastName, age };
  return person;
}

console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith", "18"));
