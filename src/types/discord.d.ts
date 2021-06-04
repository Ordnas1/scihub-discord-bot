import { Collection } from "discord.js";
import { Message, Collection } from "discord.js";

declare module "discord.js" {
  export interface Command {
    name: string;
    description: string;
    execute: (message: Message, args: string[]) => void;
  }
}
