import * as Discord from "discord.js";

import Config from "./utils/config";
import { parseCommands } from "./utils/helpers";

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  const { command, args } = { ...parseCommands(message) };

  if (command === "fetch") {
    message.channel.send(`Fetch paper with DOI ${args}`);
  }
});

client.login(Config.token);
