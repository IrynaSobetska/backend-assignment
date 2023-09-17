/**
 * Handles a user's turn in the game.
 *
 * This function is responsible for processing a user's move when they click on a cell in the game board.
 * It checks if the cell is empty and the game is still ongoing. If conditions are met, it marks the cell
 * with the current player's symbol (X or O), updates the game state, checks for a winner, and updates
 * the turn information accordingly.
 *
 * @function
 * @param {Event} e - The click event object.
 *
 * @example
 * // Attach this function to the click event of game cells.
 */
import dom from '../dom.js';
import data from '../data.js';
import checkWinner from '../utils/checkWinner.js';

const userTurnHandler = (e) => {
    const cellEl = e.target;
    const id = cellEl.id;

    // Check if the cell is already marked or if the game has ended
    if (cellEl.innerText || dom.turnInfo.innerHTML === `${data.turn} won!`) {
        return;
    }

    cellEl.classList.add(data.turn);
    cellEl.innerHTML = data.turn;

    // Update the game board with the player's move
    data.gameBoard[id] = data.turn;

    // Check for a winner using the checkWinner utility function
    const winResult = checkWinner(
        document.querySelectorAll(`.${data.turn}`),
        data.winCombination,
        data.turn,
        data.gameBoard,
    );

    // If there's a winner or it's a draw, update the turn information
    if (winResult !== null) {
        dom.turnInfo.innerHTML = winResult;
        return;
    }

    // Switch the turn to the other player (X to O or vice versa)
    data.turn === 'X' ? (data.turn = 'O') : (data.turn = 'X');

    // Update the turn information
    dom.turnInfo.innerHTML = data.turn + "'s turn";
};

export default userTurnHandler;
