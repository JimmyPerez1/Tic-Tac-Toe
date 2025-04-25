/*----- constants -----*/
const COLORS = {
    '1': 'red',
    '-1': 'blue',
    'null': 'white',
  };
  
  /*----- state variables -----*/
  let board;
  let winner;
  let turn;
  
  /*----- cached elements  -----*/
  const msgEl = document.getElementById('msg')
  const playAgainBtn = document.getElementById('play-again')
  const sqrEls = [...document.querySelectorAll('#board > div')];
  
  /*----- event listeners -----*/
  document.querySelector('.board').addEventListener('click', /*handlePick*/) 
  playAgainBtn.addEventListener('click', init)
  /*----- functions -----*/
  init();
  
  function init() {
      board = [
        [null, null, null,], // row 0
        [null, null, null,], // row 1
        [null, null, null], // row 2
        ]
      winner = null;
      turn = 1;
      render();
  };
  
  function render () {
    renderBoard();
    renderMessage();
    renderControls();
  };


  function renderBoard() {
    board.forEach((rowArr, rowIdx) => {
      rowArr.forEach((cellVal, colIdx) => {
        const cellId = `r${rowIdx}c${colIdx}`;
        const cellEl = document.getElementById(cellId);
        if (cellEl) {
          cellEl.style.backgroundColor = COLORS[cellVal];
          cellEl.textContent = cellVal === 1 ? 'X' : cellVal === -1 ? 'O' : '';
        }
      });
    });
  }