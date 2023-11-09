async function loadCommits() {
  const inputField = document.getElementById("username");
  let inputFieldValue = inputField.value;
  const inputRepoField = document.getElementById("repo");
  let repoFieldValue = inputRepoField.value;
  const commitsResultField = document.getElementById("commits");

  const BASE_URL = "https://api.github.com/repos/";

  try {
    const reposStream = await fetch(
      `${BASE_URL}${inputFieldValue}/${repoFieldValue}/commits`
    );
    const data = await reposStream.json();
    data.forEach((obj) => {
      const liElement = document.createElement("li");
      liElement.textContent = `${obj.commit.author.name} : ${obj.commit.message}`;
      commitsResultField.appendChild(liElement);
    });
  } catch (err) {
    const liElement = document.createElement("li");
    liElement.textContent = `Error: ${err.status} (Not Found)`;
    commitsResultField.appendChild(liElement);
  }
}
