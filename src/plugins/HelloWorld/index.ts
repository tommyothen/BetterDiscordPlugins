import type { Plugin as ZPlugin, BoundAPI } from "zerespluginlibrary";
import type { BdApi as BDAPI } from "../../../types/BdApi";

let BdApi: BDAPI;

/**
 *
 * @param {import("zerespluginlibrary").Plugin} Plugin
 * @param {import("zerespluginlibrary").BoundAPI} Library
 * @returns
 */
module.exports = (Plugin: ZPlugin, Library: BoundAPI) => {
  const { Logger } = Library;

  return class extends Plugin {
    onStart() {
      Logger.info("Plugin enabled!");
      BdApi.UI.alert("Hello World!", "This is a test alert!");
    }

    onStop() {
      Logger.info("Plugin disabled!");
    }
  };
};
