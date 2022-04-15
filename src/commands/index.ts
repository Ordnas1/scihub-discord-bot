import { Collection } from "discord.js";
import Command from "../types/commands.interface";
import fs from "fs";

// Need to access default property of a default import
// In this particular case it allows me to be consisten with destructuring
interface DefaultCommandImport {
  default: Command;
}

const loadCommands = async (): Promise<Collection<unknown, Command>> => {
  console.log();
  const commandFiles = fs
    .readdirSync("./src/commands")
    .filter((file) => file.endsWith("js") || file.endsWith("ts"))
    .filter((file) => file !== "index.js" && file !== "index.ts");

  const commands = new Collection<unknown, Command>();

  for (const file of commandFiles) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    try {
      const command: DefaultCommandImport = await import(`./${file}`);
      commands.set(command.default.name, command.default);
    } catch (error) {
      console.log("ERROR IMPORTING", error);
    }
  }

  return commands;
};

export default loadCommands;
