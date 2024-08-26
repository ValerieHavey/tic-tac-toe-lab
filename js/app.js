//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

console.log('Welcome to Tic Tac Toe!');


/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const squareIndex = document.querySelectorAll('#board-div');

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/

let board  = ['', '', '', '', '', '', '', '', ''];
let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/


const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');


/*-------------------------------- Functions --------------------------------*/



const updateBoard = () => {
   board.forEach((square, index) => {
    if (square === 'X') {
        squareEls[index].textContent = 'X';
    } else if (square === 'O') {
        squareEls[index].textContent = 'O';
    } else {
        squareEls[index].textContent = '';
    }
   })
};




const updateMessage = () => {
    if (winner === false && tie === false) {
        if (turn === 'X') {
            messageEl.textContent = "X's turn";
        } else {
            messageEl.textContent = "O's turn";
        };    
    } else if (winner === false && tie === true) {
        messageEl.textContent = "Tie!";
    } else {
        if (turn === 'X') {
            messageEl.textContent = "X wins!";
        } else {
            messageEl.textContent = "O wins!";
        };
    };
    };

    const render = () => {
        updateBoard();
        updateMessage();
    };

    const init = () => {
        board  = ['', '', '', '', '', '', '', '', ''];
        turn = 'X';
        winner = false;
        tie = false;
        render();
    };
    
    init(); 

    const checkForWinner = () => {
        winningCombos.forEach(winCombo => {
            if (board[winCombo[0]] !== '' && board[winCombo[0]] === board[winCombo[1]] && board[winCombo[0]] === board[winCombo[2]]) {
                winner = true;
            }
        })
    }

    const checkForTie = () => {
        if (winner === true) {
            return
        } else if (board.includes ('')) {
            return
        } else {
            tie = true;
        }
    }

    function switchPlayerTurn() {
        if (winner) {
            return;
        };

        if (turn ==='X') {
            turn = 'O';
        } else if (turn === 'O') {
            turn = 'X';
        }
    }

    const handleClick = (event) => {
        const squareIndex = parseInt(event.target.id);
      
        if (board[squareIndex] !== '' || winner === true) {
            return;
        }
        placePiece(squareIndex);
        checkForWinner();
        
        checkForTie();
        
        switchPlayerTurn();
        
        render();
    };

    function placePiece(index) {
        board[index] = turn;
        
    }

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => {
    square.addEventListener('click', handleClick);
});


function handleSquareClick(event) {
    const squareEls = event.target;
    const squareIndex = parseInt(square.id.replace('square', '' )) -1;
}

resetBtnEl.addEventListener('click', init);