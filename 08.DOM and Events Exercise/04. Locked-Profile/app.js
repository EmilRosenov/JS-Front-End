function lockedProfile() {
  const buttonElement = Array.from(document.getElementsByTagName("button"));

  buttonElement.forEach((button) => {
    button.addEventListener("click", toggleInformation);
  });

  function toggleInformation(e) {
    const btn = e.currentTarget;
    const currentProfile = btn.parentElement;
    const children = Array.from(currentProfile.children);
    const unlockedRadioBtn = children[4];

    if (unlockedRadioBtn.checked) {
      const currentHiddenDiv = children[9];

      if (btn.textContent === "Show more") {
        currentHiddenDiv.style.display = "block";
        btn.textContent = "Hide it";
      } else {
        currentHiddenDiv.style.display = "none";
        btn.textContent = "Show more";
      }
    }
  }
}
