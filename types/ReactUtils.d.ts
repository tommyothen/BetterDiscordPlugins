import { ReactNode } from "react";

export = ReactUtils;
export as namespace ReactUtils;

/**
 * `ReactUtils` is a utility class for interacting with React internals. Instance is accessible through the {@link BdApi}.
 * This is extremely useful for interacting with the internals of the UI.
 * @type ReactUtils
 * @summary {@link ReactUtils} is a utility class for interacting with React internals.
 * @name ReactUtils
 */
declare namespace ReactUtils {
    /**
     * Gets the internal react data of a specified node
     * 
     * @param {HTMLElement} node Node to get the react data from
     * @returns {object|undefined} Either the found data or `undefined` 
     */
    function getInternalInstance(node: HTMLElement): object | undefined

    /**
     * Attempts to find the "owner" node to the current node. This is generally 
     * a node with a stateNode--a class component.
     * @param {HTMLElement} node - node to obtain react instance of
     * @param {object} options - options for the search
     * @param {array} [options.include] - list of items to include from the search
     * @param {array} [options.exclude=["Popout", "Tooltip", "Scroller", "BackgroundFlash"]] - list of items to exclude from the search
     * @param {callable} [options.filter=_=>_] - filter to check the current instance with (should return a boolean)
     * @return {(*|null)} the owner instance or undefined if not found.
     */
    function getOwnerInstance(node: HTMLElement, options: object): ReactNode | null

    /**
     * Creates an unrendered react component that wraps dom elements.
     * @param {HTMLElement} element - element or array of elements to wrap into a react component
     * @returns {object} - unrendered react component
     */
    function wrapElement(element: HTMLElement): object
}


