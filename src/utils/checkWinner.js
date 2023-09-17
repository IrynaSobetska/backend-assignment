/**
 * Checks for a winner or a draw in a game of Tic-Tac-Toe.
 *
 * @param {HTMLElement[]} domEl - An array of HTMLElements representing the game board cells.
 * @param {number[][]} winCombination - An array of arrays specifying winning combinations.
 * @param {string} turnInfo - A string indicating the current player's turn.
 * @returns {string|null} Returns the result of the game: the winning player's name, 'Draw!', or null if the game is ongoing.
 *
 * @example
 * const cells = document.querySelectorAll('.cell');
 * const winningCombinations = [
 *     [0, 1, 2],
 *     [3, 4, 5],
 *     [6, 7, 8],
 *     [0, 3, 6],
 *     [1, 4, 7],
 *     [2, 5, 8],
 *     [0, 4, 8],
 *     [2, 4, 6],
 * ];
 * const currentTurn = "X's turn";
 *
 * const result = checkWinner(cells, winningCombinations, currentTurn);
 * console.log(result); // Example output: "X won!"
 */

const checkWinner = (cells, winCombination, turnInfo, gameBoard) => {
    // An array of all game board cells
    const allTurns = cells;
    const turnsId = Array.from(allTurns).map((element) => element.id);

    // Counter for consecutive marks in a winning combination
    let win = 0;
    for (const item of winCombination) {
        for (const num of item) {
            if (turnsId.includes(`${num}`)) {
                win += 1;
            } else {
                win = 0;
                break;
            }

            if (win === 3) {
                return `${turnInfo} won!`;
            }
        }
    }

    // Check if the game is a draw
    const isDraw = gameBoard.every((cell) => cell !== '');
    if (isDraw) {
        return 'Draw!';
    }

    // Return null if the game is still ongoing
    return null;
};

export default checkWinner;
