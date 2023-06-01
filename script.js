const gameBoard = {
    //Initial empty game state
    board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
    ],

    render: function() {
        this.board.forEach(row => {
            row.forEach(square => {
                const makeSqr = document.createElement('div');
                const boardContainer = document.getElementById('board-container')
                makeSqr.classList.add('square');
                boardContainer.appendChild(makeSqr);
            });

        });
    },

    update: function(rowNum, colNum, playerMarker) {
        const checkGameState = this.board;
        const getElement = checkGameState[rowNum][colNum];
        if (getElement === null){
            this.board[rowNum][colNum] = playerMarker;
        } else {
            alert(`This cell is already occupied with a marker, please choose another cell.`)
        }
        this.render();
    },

    reset: function() {
        this.board.forEach((row, i) => {
            row.forEach((_, j) => {
                this.board[i][j] = null;
            });
        });

        this.render();
    }
    
}

const player = (playerName, playerMarker) => {
    const name = playerName;
    const marker = playerMarker;
    return {name, marker};

}

const gameFlow = {
    currentState: null,
    player1: player('Player 1', 'X'),
    player2: player('Player 2', 'O'),
    currentPlayer: null,
   
    updateState: function() {
        this.currentState = gameBoard.board;
    },

    startGame: function() {
        gameBoard.reset();
        this.currentPlayer = this.player1;
        this.updateState();
    },

    nextTurn: function() {
        if (this.currentPlayer === player1) {
            this.currentPlayer === this.player2;
        } else {
            this.currentPlayer = this.player1;
        }
        this.updateState();
    }
}

const boardElement = document.getElementById('board-container');
const updateGameBoard = () => {
    
}
gameBoard.render();