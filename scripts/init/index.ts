// @ts-ignore
import zplrc from "../../.zplrc";
// @ts-ignore
import consts from "../../.consts";
import { argv } from "process";
import { resolve } from "path";
import { existsSync, mkdirSync, cpSync, writeFileSync } from "fs";

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

// Check we have valid functions
if (!zplrc || !consts) {
  console.error("Missing zplrc or consts");
  process.exit(1);
}

// Grab the config from .zplrc.js
const config = zplrc(pluginName);

// Grab the default values for the config
const { author, github, github_raw } = consts(pluginName).default;

// Check we don't have any clashes with existing plugins
// on the filesystem
const pluginPath = resolve(config.base, pluginName);
const outputPath = resolve(config.out);
const pluginExists = existsSync(pluginPath) || existsSync(outputPath);

if (pluginExists) {
  console.error(`Plugin ${pluginName} already exists`);
  process.exit(1);
}

// Create the output directory
mkdirSync(outputPath, { recursive: true });

// Create the plugin directory
mkdirSync(pluginPath, { recursive: true });

// Copy the "./template.ts" file and rename it to "index.ts"
cpSync(resolve(__dirname, "template.ts"), resolve(pluginPath, "index.ts"));

// Write a config json file to the plugin directory
writeFileSync(
  resolve(pluginPath, "config.json"),
  JSON.stringify(
    {
      info: {
        name: pluginName,
        authors: [
          author || {
            name: "",
            discord_id: "",
            github_username: "",
            twitter_username: "",
          },
        ],
        version: "0.0.0",
        description: "",
        github: github || "",
        github_raw: github_raw || "",
      },
      changelog: [
        {
          title: "Initial Release",
          items: ["Started development"],
        },
      ],
      main: "index.js",
    },
    null,
    2
  )
);
