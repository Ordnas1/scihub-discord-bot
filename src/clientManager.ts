import { Client, Collection } from "discord.js";
import Command from "./types/commands.interface";

class DiscordManager {
  client: Client;
  commands: Collection<unknown, Command>;

  constructor() {
    this.client = new Client();
    this.commands = new Collection();
  }
}

export default DiscordManager;
