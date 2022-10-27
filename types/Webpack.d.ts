
import * as FilterType from './Filters'

export = Webpack;
export as namespace Webpack;

declare namespace Webpack {
	const filters: typeof FilterType

	    /**
     * Finds multiple modules using multiple filters.
     * @param {...object} queries Object representing the query to perform
     * @param {Function} queries.filter A function to use to filter modules
     * @param {Boolean} [queries.first=true] Whether to return only the first matching module
     * @param {Boolean} [queries.defaultExport=true] Whether to return default export when matching the default export
     * @param {Boolean} [queries.searchExports=false] Whether to execute the filter on webpack exports
     * @return {any}
     */
	function getBulk(...queries: [object]): any

	/**
     * Finds a module using a filter function.
     * @param {function} filter A function to use to filter modules. It is given exports, module, and moduleID. Return `true` to signify match.
     * @param {object} [options] Options to configure the search
     * @param {Boolean} [options.first=true] Whether to return only the first matching module
     * @param {Boolean} [options.defaultExport=true] Whether to return default export when matching the default export
     * @param {Boolean} [options.searchExports=false] Whether to execute the filter on webpack exports
     * @return {any}
     */
	function getModule(filter: () => void, options? : object): any
	
    /**
     * Finds a module that is lazily loaded.
     * @param {function} filter A function to use to filter modules. It is given exports. Return `true` to signify match.
     * @param {object} [options] Options for configuring the listener
     * @param {AbortSignal} [options.signal] AbortSignal of an AbortController to cancel the promise
     * @param {Boolean} [options.defaultExport=true] Whether to return default export when matching the default export
     * @param {Boolean} [options.searchExports=false] Whether to execute the filter on webpack exports
     * @returns {Promise<any>}
     */
	function waitForModule(filter: () => void, options? : object): Promise<any>
}


