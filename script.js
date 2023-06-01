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

 

gameBoard.render();