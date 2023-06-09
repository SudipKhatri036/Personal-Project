function openPlayerConfig(e) {
  editedPlayer = +e.target.dataset.playerid;
  configOverlay.style.display = "block";
  backDrop.style.display = "block";
}

function closePlayerConfig() {
  configOverlay.style.display = "none";
  backDrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  showError.textContent = "";
  form.firstElementChild.lastElementChild.value = "";
}

function fillConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredName = formData.get("playername").trim();

  if (!enteredName) {
    showError.textContent = "Please enter a valid name!";
    form.firstElementChild.classList.add("error");
    return;
  }

  const updatedPlayerDataEl = document.getElementById(
    `player-${editedPlayer}-info`
  );

  updatedPlayerDataEl.children[1].textContent = enteredName;

  players[editedPlayer - 1].name = enteredName;

  closePlayerConfig();
}
