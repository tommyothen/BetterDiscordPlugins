export = Filters;
export as namespace Filters;

/**
 * Series of {@link Filters} to be used for finding webpack modules.
 */
declare namespace Filters {

	/**
	 * Generates a function that filters by the `displayName` property.
	 * @param {string} name Name the module should have
	 * @returns {function} A filter that checks for a `displayName` match
	 */
	function byDisplayName(name: string): (data: object) => any

	/**
	 * Generates a function that filters by a set of properties.
	 * @param {...string} props List of property names
	 * @returns {function} A filter that checks for a set of properties
	 */
	function byProps(...props: string[]): (data: object) => any

	/**
	 * Generates a function that filters by a set of properties on the object's prototype.
	 * @param {...string} props List of property names
	 * @returns {function} A filter that checks for a set of properties on the object's prototype.
	 */
	function byPrototypeFields(...props: string[]): (data: object) => any

	/**
	 * Generates a function that filters by a regex.
	 * @param {RegExp} search A RegExp to check on the module
	 * @param {function} filter Additional filter
	 * @returns {function} A filter that checks for a regex match
	 */
	function byRegex(search: RegExp, filter: () => void): (data: object) => any

	/**
	 * Generates a function that filters by strings.
	 * @param {...String} strings A list of strings
	 * @returns {function} A filter that checks for a set of strings
	 */
	function byStrings(...strings: string[]): (data: object) => any

	/**
	 * Generates a combined function from a list of filters.
	 * @param {...function} filters A list of filters
	 * @returns {function} Combinatory filter of all arguments
	 */
	function combine(...filters: [() => void]): (data: object) => any
}


