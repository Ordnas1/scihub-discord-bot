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

Manager.client.on("message", async (message) => {
  const { command, args } = { ...parseCommands(message) };
  console.log({ command, args });
  if (!args || !command) return;
  console.log("Found args and command!");
  if (!Manager.commands.has(command)) return;

  try {
    await Manager.commands.get(command)?.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error while trying to execute the command");
  }
});

Manager.client.login(Config.token);
