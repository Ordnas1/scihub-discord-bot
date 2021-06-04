import SciHubService from "../services/scihub";

import Command from "../types/commands.interface";

const fetch: Command = {
  name: "fetch",
  description: "Fetches a paper from scihub",
  execute: async (message, args): Promise<void> => {
    message.channel.send("Fetching document with DOI " + args);
    console.log(message.author, args);

    const data = await SciHubService.getPaper(args);
    console.log(data);
  },
};

export default fetch;
