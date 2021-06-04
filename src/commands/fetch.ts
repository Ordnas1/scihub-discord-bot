import Command from "../types/commands.interface";

const fetch: Command = {
  name: "fetch",
  description: "Fetches a paper from scihub",
  execute(message, args): void {
    console.log(message.author, args);
  },
};

export default fetch;
