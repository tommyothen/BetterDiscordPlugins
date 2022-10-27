import { argv } from "process";
import { resolve } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
// @ts-ignore
import zplrc from "../../.zplrc";

const args = argv.slice(2);

// Check if we have exactly one argument
if (args.length !== 1) {
  console.error("Please provide exactly one argument");
  process.exit(1);
}

const pluginName = args[0];
if (!pluginName) {
  console.error("Please provide a name for the plugin");
  process.exit(1);
}

// First transpile the plugin from typescript to javascript
// Finally run the "zpl build ${pluginName}" command to build the plugin
const config = zplrc(pluginName);

// Check the plugin exists
const pluginPath = resolve(config.base, pluginName);
const pluginExists = existsSync(pluginPath);

if (!pluginExists) {
  console.error(`Plugin ${pluginName} does not exist`);
  process.exit(1);
}

// Transpile the plugin
// This will fail, ignore the error
try {
  execSync(`tsc --target es6 --module es6 ${resolve(pluginPath, "index.ts")}`);
} catch (e) {}

// The generated javascript will be a little wonky and
// won't play nice with the zpl build command, so we need
// to fix it up a little bit
const transpiledFile = resolve(pluginPath, "index.js");

// Read the file
const file = readFileSync(transpiledFile, "utf8");

// Remove the "export {};" line
let fixedFile = file.replace("export {};", "");

// Remove the "let BdApi;" line
fixedFile = fixedFile.replace("let BdApi;", "");

// Write the file
writeFileSync(transpiledFile, fixedFile);


// Run the build command
execSync(`npm run build:zpl ${pluginName}`);

// Delete the transpiled plugin
execSync(`rm ${resolve(pluginPath, "index.js")}`);

console.log(`Successfully built plugin ${pluginName}`);
