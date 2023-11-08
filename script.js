// Helper functions

// Shows the game selector and hides the game content
function goBack() {
  // Select the game content by a common class 'game' and hide it
  const games = document.querySelectorAll(".game");
  games.forEach(function (game) {
    game.style.display = "none";
  });

  // Show the game selector
  const gameSelector = document.getElementById("gameSelector");
  gameSelector.style.display = "flex"; // Use the same display style as in your CSS
}

// Handles the Tic Tac Toe game click
function handleTicTacToeClick() {
  displayGame(
    "Tic Tac Toe",
    "Place your 'X' or 'O' in the grid, aiming to get three in a row horizontally, vertically, or diagonally to win. Block your opponent and watch for opportunities to claim victory!",
    "ticTacToeGame"
  );
}

// Handles the Chess game click
function handleChessClick() {
  displayGame(
    "Chess",
    "Move your pieces strategically across an 8x8 board to capture the opponent's king, while protecting your own, remembering each piece has its own unique movement pattern.",
    "chessGame"
  );
}

// Handles the Connect Four game click
function handleConnectFourClick() {
  displayGame(
    "Connect Four",
    "Drop your colored discs into a seven-column grid and aim to connect four in a row vertically, horizontally, or diagonally before your opponent does.",
    "connectFourGame"
  );
}

// Creates and displays the game content
function displayGame(gameTitleText, gameRulesText, gameId) {
  // Hide the game selector
  const gameSelector = document.getElementById("gameSelector");
  gameSelector.style.display = "none";

  // Check if the game content already exists
  let game = document.getElementById(gameId);
  if (!game) {
    // Create the game container
    game = document.createElement("div");
    game.id = gameId;
    game.className = "game"; // Assign a class for common styling

    // Create and set the title
    const title = document.createElement("h1");
    title.innerText = gameTitleText;

    // Create and set the rules
    const rules = document.createElement("p");
    rules.innerText = gameRulesText;

    // Create and set the back button
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.onclick = goBack; // Attach the goBack function

    // Append the title, rules, and back button to the game container
    game.appendChild(title);
    game.appendChild(rules);
    game.appendChild(backButton);

    // Append the game container to the body
    document.body.appendChild(game);
  }

  // Show the game content
  game.style.display = "block";
}

// Attaching event listeners to game options
document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners for Tic Tac Toe
  document
    .querySelector("#selectTicTacToe")
    .addEventListener("click", handleTicTacToeClick);

  // Attach event listeners for Connect Four
  document
    .querySelector("#selectConnectFour")
    .addEventListener("click", handleConnectFourClick);

  // Attach event listeners for Chess
  document
    .querySelector("#selectChess")
    .addEventListener("click", handleChessClick);
});
