import glob from "glob";
import { promisify } from "util";
import { Collection } from "discord.js";
import Command from "../types/commands.interface";

const asyncGlob = promisify(glob);

// Need to access default property of a default import
// In this particular case it allows me to be consisten with destructuring
interface DefaultCommandImport {
  default: Command;
}

const loadCommands = async () => {
  const commandFiles = await (
    await asyncGlob(`${__dirname}/*.ts`)
  ).filter((file) => !file.includes("index.ts"));

  const commands = new Collection<unknown, Command>();

  for (const file of commandFiles) {
    const command: DefaultCommandImport = (await import(
      file
    )) as DefaultCommandImport;
    commands.set(command.default.name, command.default);
  }

  return commands;
};

export default loadCommands;
