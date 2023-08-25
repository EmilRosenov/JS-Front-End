function printGradeAndDescription(grade) {
  let printFormatted = (grade) => {
    let description = "";
    if (grade < 3) {
      description = "Fail";
    } else if (grade >= 3 && grade < 3.5) {
      description = "Poor";
    } else if (grade >= 3.5 && grade < 4.5) {
      description = "Good";
    } else if (grade >= 4.5 && grade < 5.5) {
      description = "Very good";
    } else {
      description = "Excellent";
    }

    if (description === "Fail") {
      return console.log(`${description} (${Math.floor(grade)})`);
    } else {
      return console.log(`${description} (${grade.toFixed(2)})`);
    }
  };
  printFormatted(grade);
}
printGradeAndDescription(2.99);
