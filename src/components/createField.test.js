/**
 * @jest-environment jsdom
 */

import createField from './createField.js';

describe('createField function', () => {
    test('should return a div with the class "cellContainer"', () => {
        const fieldContainer = createField();
        expect(fieldContainer.className).toEqual('cellContainer');
        expect(fieldContainer.tagName).toEqual('DIV');
    });

    test('should contain 9 cells with unique IDs', () => {
        const fieldContainer = createField();
        const cellElements = fieldContainer.querySelectorAll('.cell');
        expect(cellElements.length).toEqual(9);

        const idSet = new Set();
        cellElements.forEach((cellElement) => {
            const id = cellElement.id;
            expect(id).toMatch(/^\d$/); // ID should be a single digit
            idSet.add(id);
        });

        expect(idSet.size).toEqual(9); // IDs should be unique
    });

    test('should add "cell" class to each cell element', () => {
        const fieldContainer = createField();
        const cellElements = fieldContainer.querySelectorAll('.cell');

        cellElements.forEach((cellElement) => {
            expect(cellElement.classList.contains('cell')).toBe(true);
        });
    });

    test('should not have any child elements with text content initially', () => {
        const fieldContainer = createField();
        const cellElements = fieldContainer.querySelectorAll('.cell');

        cellElements.forEach((cellElement) => {
            expect(cellElement.textContent).toBe('');
        });
    });
});
