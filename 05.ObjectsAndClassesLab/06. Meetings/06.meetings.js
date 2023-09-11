function bookAppointments(input) {
  let booking = {};

  for (let line of input) {
    let [day, personName] = line.split(" ");
    if (day in booking) {
      //   schedule.push([day, personName]);
      console.log(`Conflict on ${day}!`);
    } else {
      booking[day] = personName;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (let [key, value] of Object.entries(booking)) {
    console.log(`${key} -> ${value}`);
  }
}

bookAppointments([
  "Monday Peter",
  "Wednesday Bill",
  "Monday Tim",
  "Friday Tim",
]);

// console.log(
//   bookAppointments([
//     "Friday Bob",
//     "Saturday Ted",
//     "Monday Bill",
//     "Monday John",
//     "Wednesday George",
//   ])
// );
