export = Patcher;
export as namespace Patcher;

/**
 * `Patcher` is a utility class for modifying existing functions. Instance is accessible through the {@link BdApi}.
 * This is extremely useful for modifying the internals of Discord by adjusting return value or React renders, or arguments of internal functions.
 */
declare namespace Patcher {
	/**
	 * This method patches onto another function, allowing your code to run instead. 
	 * Using this, you are also able to modify the return value, using the return of your code instead.
	 * @param {string} caller Name of the caller of the patch function.
	 * @param {object} moduleToPatch Object with the function to be patched. Can also be an object's prototype.
	 * @param {string} functionName Name of the function to be patched.
	 * @param {function} callback Function to run after the original method. The function is given the `this` context, the `arguments` of the original function, and the `return` value of the original function.
	 * @returns {function} Function that cancels the original patch.
	 */
	function after(caller: string, moduleToPatch: object, functionName: string, callback: () => void): (data: object) => any

	/**
	 * This method patches onto another function, allowing your code to run beforehand. 
	 * Using this, you are also able to modify the incoming arguments before the original method is run.
	 * @param {string} caller Name of the caller of the patch function.
	 * @param {object} moduleToPatch Object with the function to be patched. Can also be an object's prototype.
	 * @param {string} functionName Name of the function to be patched.
	 * @param {function} callback Function to run before the original method. The function is given the `this` context and the `arguments` of the original function.
	 * @returns {function} Function that cancels the original patch.
	 */
	function before(caller: string, moduleToPatch: object, functionName: string, callback: () => void): (data: object) => any

	/**
	 * Returns all patches by a particular caller. The patches all have an `unpatch()` method.
	 * @param {string} caller ID of the original patches
	 * @returns {Array<function>} Array of all the patch objects.
	 */
	function getPatchesByCaller(caller: string): (data: Array<(any)>) => any

	/**
	 * This method patches onto another function, allowing your code to run instead. 
	 * Using this, you are also able to modify the return value, using the return of your code instead.
	 * @param {string} caller Name of the caller of the patch function.
	 * @param {object} moduleToPatch Object with the function to be patched. Can also be an object's prototype.
	 * @param {string} functionName Name of the function to be patched.
	 * @param {function} callback Function to run before the original method. The function is given the `this` context, `arguments` of the original function, and also the original function.
	 * @returns {function} Function that cancels the original patch.
	 */
	function instead(caller: string, moduleToPatch: object, functionName: string, callback: () => void): (data: object) => any

	/**
	 * Automatically cancels all patches created with a specific ID.
	 * @param {string} caller ID of the original patches
	 */
	function unpatchAll(caller: string): void
}
