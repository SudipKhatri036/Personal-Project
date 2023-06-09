const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

let players = [
  { name: "", Symbol: "X" },
  { name: "", Symbol: "O" },
];

let activePlayerName = document.getElementById("active-player-name");
const configOverlay = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");
const cancelBtn = document.getElementById("cancelEl");
const editPlayerOne = document.getElementById("edit-player-one");
const editPlayerTwo = document.getElementById("edit-player-two");
const form = document.getElementById("formEl");
const inputField = document.getElementById("playername");
const showError = document.getElementById("error-detail");
const startGame = document.getElementById("show-game-board");
const showGameBoard = document.getElementById("active-game");
const gameBoard = document.getElementById("game-board");
const gameOverElement = document.getElementById("game-over");

editPlayerOne.addEventListener("click", openPlayerConfig);
editPlayerTwo.addEventListener("click", openPlayerConfig);

cancelBtn.addEventListener("click", closePlayerConfig);
backDrop.addEventListener("click", closePlayerConfig);

form.addEventListener("submit", fillConfig);
startGame.addEventListener("click", startTheGame);

gameBoard.addEventListener("click", selectGameField);
