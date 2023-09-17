import checkWinner from './checkWinner.js';

describe('checkWinner function', () => {
    test('should return the name of the winning player', () => {
        const cells = [
            { id: '0', className: 'X' },
            { id: '1', className: 'X' },
            { id: '2', className: 'X' },
            { id: '3', className: '' },
            { id: '4', className: 'O' },
            { id: '5', className: 'O' },
            { id: '6', className: '' },
            { id: '7', className: '' },
            { id: '8', className: 'O' },
        ];
        const winCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        const turnInfo = 'X';
        const gameBoard = ['X', 'X', 'X', '', 'O', 'O', '', '', 'O'];

        const result = checkWinner(cells, winCombination, turnInfo, gameBoard);
        expect(result).toBe('X won!');
    });

    test('should return the name of the winning player', () => {
        const cells = [
            { id: '0', className: 'X' },
            { id: '1', className: 'X' },
            { id: '2', className: '' },
            { id: '3', className: 'O' },
            { id: '4', className: 'O' },
            { id: '5', className: 'O' },
            { id: '6', className: 'X' },
            { id: '7', className: '' },
            { id: '8', className: '' },
        ];
        const winCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        const turnInfo = 'O';
        const gameBoard = ['X', 'X', '', 'O', 'O', 'O', 'X', '', ''];

        const result = checkWinner(cells, winCombination, turnInfo, gameBoard);
        expect(result).toBe('O won!');
    });

    test('should return "Draw!" if the game is a draw', () => {
        const cells = [
            { className: 'X' },
            { className: 'O' },
            { className: 'X' },
            { className: 'X' },
            { className: 'O' },
            { className: 'X' },
            { className: 'O' },
            { className: 'X' },
            { className: 'O' },
        ];
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        const turnInfo = 'X';
        const gameBoard = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'];

        const result = checkWinner(
            cells,
            winningCombinations,
            turnInfo,
            gameBoard,
        );

        expect(result).toBe('Draw!');
    });

    test('should return null if the game is not finished', () => {
        const cells = [
            { className: 'X' },
            { className: 'O' },
            { className: 'X' },
            { className: '' },
            { className: '' },
            { className: '' },
            { className: '' },
            { className: '' },
            { className: '' },
        ];
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        const turnInfo = 'X';
        const gameBoard = ['X', 'O', 'X', '', '', '', '', '', ''];

        const result = checkWinner(
            cells,
            winningCombinations,
            turnInfo,
            gameBoard,
        );

        expect(result).toBe(null);
    });
});
