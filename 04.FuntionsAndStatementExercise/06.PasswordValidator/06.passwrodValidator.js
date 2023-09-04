function passwordValidator(input) {
  let isValid = true;
  const isValidLength = (pass) => pass.length >= 6 && input.length <= 10;
  const consistOnlyLettersAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
  const containsAtLeastTwoDigits = (pass) =>
    [...pass.matchAll(/\d/g)].length >= 2;

  if (!isValidLength(input)) {
    console.log(`Password must be between 6 and 10 characters`);
    isValid = false;
  }

  if (!consistOnlyLettersAndDigits(input)) {
    console.log(`Password must consist only of letters and digits`);
    isValid = false;
  }

  if (!containsAtLeastTwoDigits(input)) {
    console.log(`Password must have at least 2 digits`);
    isValid = false;
  }

  if (isValid === true) {
    console.log(`Password is valid`);
  }
}

// passwordValidator("logIn");
// passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
