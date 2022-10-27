import ContextMenuType from './ContextMenu'
import DOMType from './Dom'
import DataType from './Data'
import PatcherType from './Patcher'
import AddonAPIType from './AddonAPI'
import * as ReactUtilsType from './ReactUtils'
import UIType from './UI'
import UtilsType from './Utils'
import * as WebpackType from './Webpack'

// export = BdApi;
// export as namespace BdApi;

export interface BdApi {
	ContextMenu: typeof ContextMenuType
	DOM: typeof DOMType
	Data: typeof DataType
	Patcher: typeof PatcherType
	Plugins: typeof AddonAPIType
	ReactUtils: typeof ReactUtilsType
	Themes: typeof AddonAPIType
	UI: typeof UIType
	Utils: typeof UtilsType
	Webpack: typeof WebpackType
}
