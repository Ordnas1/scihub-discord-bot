import SciHubService from "../services/scihub";
import ScrappingService from "../services/scrapper";
import Command from "../types/commands.interface";

const fetch: Command = {
  name: "fetch",
  description: "Fetches a paper from scihub",
  execute: async (message, args): Promise<void> => {
    try {
      message.channel.send(`Fetching document with DOI ${args[0]}`);
      console.log(message.author, args);

      const data = await SciHubService.getPaper(args);
      console.log(data);
      const downloadLink = ScrappingService.getDownloadLink(data);

      message.channel.send(`Link found: ${downloadLink}`);
    } catch (error) {
      console.log(error);
      message.channel.send("An unexpect error occurred while fetching");
    }
  },
};

export default fetch;
