// function parkingRecords(input) {
//   let parking = [];
//   for (let line of input) {
//     let direction = line.split(", ")[0];
//     let carNumber = line.split(", ")[1];

//     if (direction === "IN" && !parking.hasOwnProperty(carNumber)) {
//       parking.push(carNumber);
//     } else if (direction === "OUT") {
//       parking.splice(parking.indexOf(carNumber), 1);
//     }
//   }

//   let sorted = parking.sort((a, b) => a.localeCompare(b));

//   if (sorted.length === 0) {
//     console.log("Parking Lot is Empty");
//   } else {
//     for (let reg of sorted) {
//       console.log(`${reg}`);
//     }
//   }
// }

function parkingRecords(input) {
  let parking = [];
  for (const line of input) {
    let [direction, carNumber] = line.split(", ");
    if (direction === "IN" && !parking.includes(carNumber)) {
      parking.push(carNumber);
    } else if (direction === "OUT" && parking.includes(carNumber)) {
      parking.splice(parking.indexOf(carNumber), 1);
    }
  }

  if (parking.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    for (let carReg of parking.sort((a, b) => a.localeCompare(b))) {
      console.log(`${carReg}`);
    }
  }
}

parkingRecords([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

parkingRecords([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "OUT, CA1234TA",
]);
