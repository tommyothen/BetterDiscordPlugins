export = Data;
export as namespace Data;

/**
 * `Data` is a simple utility class for the management of plugin data. An instance is available on {@link BdApi}.
 * @type Data
 * @summary {@link Data} is a simple utility class for the management of plugin data.
 * @name Data
 */
declare namespace Data {
	/**
	 * Deletes a piece of stored data, this is different than saving as null or undefined.
	 * 
	 * @param {string} pluginName Name of the plugin deleting data
	 * @param {string} key Which piece of data to delete
	 */
	function _delete(pluginName: string, key: string): void

	/**
	 * Loads previously stored data.
	 * 
	 * @param {string} pluginName Name of the plugin loading data
	 * @param {string} key Which piece of data to load
	 * @returns {any} The stored data
	 */
	function load(pluginName: string, key: string): any | null

	/**
	 * Saves JSON-serializable data.
	 * 
	 * @param {string} pluginName Name of the plugin saving data
	 * @param {string} key Which piece of data to store
	 * @param {any} data The data to be saved
	 */
	function save(pluginName: string, key: string, data: any): void
}


