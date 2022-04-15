import SciHubService from "../services/scihub";
import ScrappingService from "../services/scrapper";
import Command from "../types/commands.interface";

const fetch: Command = {
  name: "fetch",
  description: "Fetches a paper from scihub",
  execute: async (message, args): Promise<void> => {
    try {
      const messageText = `Fetching document with DOI ${args[0]}`;
      console.log(messageText);
      message.channel.send(messageText);

      const data = await SciHubService.getPaper(args);
      const downloadLink = ScrappingService.getDownloadLink(data);

      message.channel.send(`Link found: ${downloadLink}`);
    } catch (error) {
      console.error(error);
      message.channel.send("An unexpect error occurred while fetching");
    }
  },
};

export default fetch;
