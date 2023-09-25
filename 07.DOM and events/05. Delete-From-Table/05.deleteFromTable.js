function deleteByEmail() {
  const input = document.querySelector("input").value;
  const emails = Array.from(document.querySelectorAll("td:nth-child(even)"));
  let searchedEmail = emails.find((x) => x.textContent === input);

  const result = document.getElementById("result");

  if (searchedEmail) {
    result.textContent = "Deleted.";
    searchedEmail.parentElement.remove();
  } else {
    result.textContent = "Not found.";
  }
}
