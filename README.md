# BetterDiscordPlugins

This is a collection of plugins for [BetterDiscord](https://betterdiscord.app/)

Written in Typescript for easier development and maintenance.

Shoutout to [mattie078](https://github.com/mattie078/betterdiscord-typescript-template) and their BdApi v1.8.0 type definitions which is used in this project.


## Plugins
[HelloWorld](dist/HelloWorld) - A proof of concept plugin for me to test the build process and the type definitions.

## Plugin Installation
Head to the `/dist` folder and download the plugin you want to install.

Then head to your BetterDiscord plugins folder and paste the plugin there.

## Plugin Development
To build your own plugins, in this repository we use the [ZeresPluginLibrary](https://github.com/rauenzi/BDPluginLibrary)

To get started, clone this repository and run `npm install` to install the dependencies.

Next, create a copy of the `.consts.js.example` file, rename it to `.consts.js` and fill in the values.

To initialize a new plugin, run `npm run init {PluginName}` and it will create a new folder in the `/src/plugins/` folder with the name you provided.

Finally, run `npm run build {PluginName}` to build the plugin.

## Contributing
If you want to contribute to this repository, feel free to open a pull request.

## License
[MIT](LICENSE)

