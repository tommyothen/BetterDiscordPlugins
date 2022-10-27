export = AddonAPI;
export as namespace AddonAPI;

/**
 * `AddonAPI` is a utility class for working with plugins and themes. Instances are accessible through the {@link BdApi}.
 */
declare namespace AddonAPI {
	/**
	 * The path to the addon folder.
	 * @type string
	 */
	const folder: string

	/**
	  * Disables the given addon.
	  * @param {string} idOrFile Addon id or filename.
	  */
	function disable(idOrFile: string): void

	/**
	 * Enables the given addon.
	 * @param {string} idOrFile Addon id or filename.
	 */
	function enable(idOrFile: string): void

	/**
	 * Gets a particular addon.
	 * @param {string} idOrFile Addon id or filename.
	 * @returns {object} Addon instance
	 */
	function get(idOrFile: string): object

	/**
	 * Gets all addons of this type.
	 * @returns {Array<object>} Array of all addon instances
	 */
	function getAll(): Array<object>

	/**
	 * Determines if a particular adon is enabled.
	 * @param {string} idOrFile Addon id or filename.
	 * @returns {boolean}
	 */
	function isEnabled(idOrFile: string): boolean

	/**
	 * Reloads if a particular addon is enabled.
	 * @param {string} idOrFile Addon id or filename.
	 */
	function reload(idOrFile: string): void

	/**
	 * Toggles if a particular addon is enabled.
	 * @param {string} idOrFile Addon id or filename.
	 */
	function toggle(idOrFile: string): void
}
