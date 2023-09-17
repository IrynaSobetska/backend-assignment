/**
 * Creates a container element representing the game board with clickable cells.
 *
 * @returns {HTMLElement} A container div element representing the game board.
 *
 * @example
 * const gameBoardContainer = createField();
 * document.getElementById("box").append(gameBoardContainer);
 */
import userTurnHandler from '../handlers/userTurnHandler.js';

const createField = () => {
    // container
    const cellContainer = document.createElement('div');
    cellContainer.className = 'cellContainer';

    let num = 0;

    // create and append cells
    for (let i = 0; i <= 8; i++) {
        const cell = document.createElement('div');
        cell.classList = 'cell';
        cell.id = num;
        cellContainer.append(cell);
        cell.addEventListener('click', (e) => {
            userTurnHandler(e);
        });
        num += 1;
    }

    return cellContainer;
};

export default createField;
