let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtn = document.getElementById("cancel-btn");
const startNewGameBtn = document.getElementById("start-game");
//const gameFieldEelements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");


editPlayer1BtnElement.addEventListener("click",openPlayerConfig);
editPlayer2BtnElement.addEventListener("click",openPlayerConfig);

cancelConfigBtn.addEventListener("click",closePlayerConfig);
backdropElement.addEventListener("click",closePlayerConfig); 

formElement.addEventListener("submit",savePlayerConfig);

startNewGameBtn.addEventListener("click",startNewGame);

//for (const gameFieldElement of gameFieldEelements) {
 //   gameFieldElement.addEventListener("click",selectGameField);
//}

gameBoardElement.addEventListener("click",selectGameField);