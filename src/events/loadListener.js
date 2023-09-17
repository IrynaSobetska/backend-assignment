/**
 * Adds a load event listener page.
 * When the page is loaded, the `loadHandler` function is invoked to load
 * the game board onto the web page.
 *
 * @function
 * @example
 * loadListener(); // Binds the loadHandler function to the load event
 */

import loadHandler from '../handlers/loadHandler.js';

const loadListener = () => {
    window.addEventListener('load', loadHandler);
};

export default loadListener;
