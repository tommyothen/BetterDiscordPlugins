export = DOM;
export as namespace DOM;

/**
 * `DOM` is a simple utility class for dom manipulation. An instance is available on {@link BdApi}.
 * @type DOM
 * @summary {@link DOM} is a simple utility class for dom manipulation.
 * @name DOM
 */
declare namespace DOM {

    /**
     * Current height of the user's screen.
     * @type {number}
     */
    const screenHeight: number

    /**
     * Current width of the user's screen.
     * @type {number}
     */
    const screenWidth: number

    /**
     * Adds a `<style>` to the document with the given ID.
     * 
     * @param {string} id ID to use for style element
     * @param {string} css CSS to apply to the document
     */
    function addStyle(id: string, css: string): void

    /**
 * Utility to help smoothly animate using JavaScript
 * 
 * @param {function} update render function indicating the style should be updates
 * @param {number} duration duration in ms to animate for
 * @param {object} [options] option to customize the animation
 */
    function animate(update: () => void, duration: number, options?: object): void

    /**
     * Utility function to make creating DOM elements easier. Acts similarly 
     * to `React.createElement`
     * 
     * @param {string} tag HTML tag name to create
     * @param {object} [options] options object to customize the element
     * @param {string} [options.className] class name to add to the element
     * @param {string} [options.id] id to set for the element
     * @param {HTMLElement} [options.target] target element to automatically append to
     * @param {HTMLElement} [child] child node to add
     * @returns HTMLElement
     */
    function createElement(tag: string, options?: object, child?: HTMLElement): HTMLElement

    /**
     * Adds a listener for when the node is removed from the document body.
     * 
     * @param {HTMLElement} node Node to be observed
     * @param {function} callback Function to run when fired
     */
    function onRemoved(node: HTMLElement, callback: () => void): void

    /**
 * Parses a string of HTML and returns the results. If the second parameter is true,
 * the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
 * This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.
 * 
 * If the second parameter is false, then the return value will be the list of parsed
 * nodes and there were multiple top level nodes, otherwise the single node is returned.
 * @param {string} html - HTML to be parsed
 * @param {boolean} [fragment=false] - Whether or not the return should be the raw `DocumentFragment`
 * @returns {(DocumentFragment|NodeList|HTMLElement)} - The result of HTML parsing
 */
    function parseHTML(html: string, fragment?: boolean): DocumentFragment | NodeList | HTMLElement

    /**
     * Removes a `<style>` from the document corresponding to the given ID.
     * 
     * @param {string} id ID uses for the style element
     */
    function removeStyle(id: string): void
}


