function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameOverElement.firstElementChild.innerHTML = `You won! <span id="winner-name">PlAYER NAME</span>`;
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardIndexEl = gameBoard.children[gameBoardIndex];

      gameBoardIndexEl.textContent = "";
      gameBoardIndexEl.classList.remove("disabled");

      gameBoardIndex++;
    }
  }
}

function startTheGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("please set custom player names for both players!");
    return;
  }

  resetGameStatus();

  activePlayerName.textContent = players[0].name;
  showGameBoard.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(e) {
  if (e.target.tagName !== "LI") {
    return;
  }

  const selectedField = e.target;
  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("Please select an empty field!");
    return;
  }

  selectedField.textContent = players[activePlayer].Symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
    return;
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    // Checking The  rows for equality
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
    // Checking the  columns for equality
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }

    // Checking From Top left to bottom right
    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }

    // Checking From Top right to bottom left
    if (
      gameData[0][2] > 0 &&
      gameData[0][2] === gameData[1][1] &&
      gameData[1][1] === gameData[2][0]
    ) {
      return gameData[0][2];
    }
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameOverElement.style.display = "block";

  if (winnerId > 0) {
    let winnerName = players[winnerId - 1].name;
    document.getElementById("winner-name").textContent = winnerName;
    return;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
