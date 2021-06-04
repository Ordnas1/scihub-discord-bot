import { Message } from "discord.js";
import Config from "./config";

export const parseCommands = (
  message: Message
): { command: string; args: string[] } | undefined => {
  if (!message.content.startsWith(Config.prefix) || message.author.bot) return;

  const args = message.content.slice(Config.prefix.length).trim().split(" ");
  const command = args.shift()?.toLowerCase();

  if (!command || !args) throw new Error("Command not found");

  return { command, args };
};

const Helpers = { parseCommands };

export default Helpers;
