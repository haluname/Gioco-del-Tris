const grid = document.getElementById('grid');
let currentPlayer = 'X';
let tabella = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function checkWinner() {
  // Controllo righe
  for (let row = 0; row < 3; row++) {
    if (tabella[row][0] !== '' && tabella[row][0] === tabella[row][1] && tabella[row][0] === tabella[row][2]) {
      return true;
    }
  }

  // Controllo colonne
  for (let col = 0; col < 3; col++) {
    if (tabella[0][col] !== '' && tabella[0][col] === tabella[1][col] && tabella[0][col] === tabella[2][col]) {
      return true;
    }
  }

  // Controllo diagonali
  if (tabella[0][0] !== '' && tabella[0][0] === tabella[1][1] && tabella[0][0] === tabella[2][2]) {
    return true;
  }

  if (tabella[0][2] !== '' && tabella[0][2] === tabella[1][1] && tabella[0][2] === tabella[2][0]) {
    return true;
  }

  return false;
}

function makeMove(row, col) {
  if (tabella[row][col] === '') {
    tabella[row][col] = currentPlayer;
    grid.children[row * 3 + col].textContent = currentPlayer;

    if (checkWinner()) {

      for (let cell of grid.children) {
        cell.style.pointerEvents = 'none'
      }
      setTimeout(function () {
        alert(`${currentPlayer} ha vinto!`);
        reset();
        for (let cell of grid.children) {
          cell.style.pointerEvents = 'all'
        }
  
      }, 1000);

     
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function reset() {
  tabella = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  for (let cell of grid.children) {
    cell.textContent = '';
  }

  currentPlayer = 'X';
}