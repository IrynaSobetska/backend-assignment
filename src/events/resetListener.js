/**
 * Adds a click event listener to the reset button in the DOM.
 *
 * When the reset button is clicked, the `resetHandler` function is invoked to reset
 * the game board and state to their initial conditions.
 *
 * @function
 * @example
 * // Attach this event to the reset button in your application.
 */
import dom from '../dom.js';
import resetHandler from '../handlers/resetHandler.js';

const resetListener = () => {
    dom.resetBtn.addEventListener('click', resetHandler);
};

export default resetListener;
