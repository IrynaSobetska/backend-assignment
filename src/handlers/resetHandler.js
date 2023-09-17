/**
 * Resets the game board and state to the initial conditions.
 *
 * This function clears the content of all cells on the game board, resets their CSS classes,
 * and initializes the game state to its initial values, including setting the turn to 'X'.
 * Additionally, it updates the turn information to indicate that it's 'X's turn to play.
 *
 * @function
 * @example
 * // Attach this function to a button click event to reset the game.
 */
import dom from '../dom.js';
import data from '../data.js';

const resetHandler = () => {
    // Clear all cells
    const cellElements = document.querySelectorAll('.cell');
    cellElements.forEach((cellEl) => {
        cellEl.innerHTML = '';
        cellEl.classList = 'cell';
    });

    // reset data and turn info
    data.gameBoard = ['', '', '', '', '', '', '', '', ''];
    data.turn = 'X';
    dom.turnInfo.innerHTML = "X's turn";
};

export default resetHandler;
