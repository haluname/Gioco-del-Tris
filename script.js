const grid = document.getElementById('grid');
let currentPlayer = 'X';
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function checkWinner() {
  // Controllo righe
  for (let row = 0; row < 3; row++) {
    if (gameBoard[row][0] !== '' && gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][0] === gameBoard[row][2]) {
      return true;
    }
  }

  // Controllo colonne
  for (let col = 0; col < 3; col++) {
    if (gameBoard[0][col] !== '' && gameBoard[0][col] === gameBoard[1][col] && gameBoard[0][col] === gameBoard[2][col]) {
      return true;
    }
  }

  // Controllo diagonali
  if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
    return true;
  }

  if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
    return true;
  }

  return false;
}

function makeMove(row, col) {
  if (gameBoard[row][col] === '') {
    gameBoard[row][col] = currentPlayer;
    grid.children[row * 3 + col].textContent = currentPlayer;

    if (checkWinner()) {

      for (let cell of grid.children) {
        cell.style.pointerEvents = 'none'
      }
      setTimeout(function () {
        alert(`${currentPlayer} ha vinto!`);
        resetGame();
        for (let cell of grid.children) {
          cell.style.pointerEvents = 'all'
        }
  
      }, 1000);

     
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function resetGame() {
  gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  for (let cell of grid.children) {
    cell.textContent = '';
  }

  currentPlayer = 'X';
}