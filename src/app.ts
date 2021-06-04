import DiscordManager from "./clientManager";
import loadCommands from "./commands";
import Config from "./utils/config";
import { parseCommands } from "./utils/helpers";

const Manager = new DiscordManager();

// Initialize any async logic required for bot here
Manager.client.once("ready", async () => {
  Manager.commands = await loadCommands();

  console.log("Ready!");
});

Manager.client.on("message", (message) => {
  const { command, args } = { ...parseCommands(message) };
  if (!args) return;
});

Manager.client.login(Config.token);
