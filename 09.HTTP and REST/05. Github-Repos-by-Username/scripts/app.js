function loadRepos() {
  const userNameInput = document.getElementById("username");
  const userName = userNameInput.value;
  const result = document.getElementById("repos");
  const BASE_URL = `https://api.github.com/users/`; //${userName}/repos

  fetch(`${BASE_URL}${userName}/repos`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      for (const key in data) {
        let liElement = document.createElement("li");
        liElement.textContent = `${data[key].full_name}`;
        result.appendChild(liElement);
      }
      result.firstElementChild.remove();
    })
    .catch((err) => {
      console.error(err);
    });
}
