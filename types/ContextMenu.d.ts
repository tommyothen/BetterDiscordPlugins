export = ContextMenu;
export as namespace ContextMenu;

/**
 * `ContextMenu` is a module to help patch and create context menus. Instance is accessible through the {@link BdApi}.
 * @type ContextMenu
 * @summary {@link ContextMenu} is a utility class for interacting with React internals.
 * @name ContextMenu
 */
declare namespace ContextMenu {
    /**
     * Builds a single menu item. The only prop shown here is the type, the rest should
     * match the actual component being built. View those to see what options exist
     * for each, they often have less in common than you might think.
     * 
     * @param {object} props - props used to build the item
     * @returns {object} the created component
     */

    function buildItem(props: object): object

    /**
     * Creates the menu *component* including the wrapping `ContextMenu`.
     * Calls {@link ContextMenu.buildMenuChildren} under the covers.
     * Used to call in combination with {@link ContextMenu.open}.
     * @param {Array<object>} setup - array of item props used to build items. See {@link ContextMenu.buildMenuChildren}
     * @returns {function} the unique context menu component
     */
    function buildMenu(setup: Array<object>): (data: object) => any

    /**
     * Creates the all the items **and groups** of a context menu recursively.
     * There is no hard limit to the number of groups within groups or number
     * of items in a menu.
     * @param {Array<object>} setup - array of item props used to build items. See {@link ContextMenu.buildItem}
     * @returns {Array<object>} array of the created component
     */

    function buildMenuChildren(setup: Array<object>): Array<object>

    /**
     * Closes the current opened context menu immediately.
     */
    function close(): void

    /**
     * Function that allows you to open an entire context menu. Recommended to build the menu with this module.
     * 
     * @param {MouseEvent} event - The context menu event. This can be emulated, requires target, and all X, Y locations.
     * @param {function} menuComponent - Component to render. This can be any react component or output of {@link ContextMenu.buildMenu}
     * @param {object} config - configuration/props for the context menu
     */
    function open(event: MouseEvent, menuComponent: () => void, config: object): void

    /**
     * Allows you to patch a given context menu. Acts as a wrapper around the `Patcher`.
     * 
     * @param {string} navId Discord's internal navId used to identify context menus
     * @param {function} callback callback function that accepts the react render tree
     * @returns {function} a function that automatically unpatches
     */
    function patch(navId: string, callback: () => void): (data: object) => any

    /**
     * Allows you to remove the patch added to a given context menu.
     * 
     * @param {string} navId the original navId from patching
     * @param {function} callback the original callback from patching
     */
    function unpatch(navId: string, callback: () => void): void
}


