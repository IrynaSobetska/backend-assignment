/**
 * Handles the loading of the game board by creating a container element representing
 * the game board with clickable cells and appending it to the DOM.
 *
 * The function retrieves the game board container from the `createField` utility
 * and appends it to the `box` element in the DOM, which is defined in the `dom` module.
 *
 * @function
 * @example
 * loadHandler();
 */

import dom from '../dom.js';
import createField from '../components/createField.js';

const loadHandler = () => {
    const domEl = createField();
    dom.box.append(domEl);
};

export default loadHandler;
