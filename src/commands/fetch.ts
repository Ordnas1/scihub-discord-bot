import ICommand from "../types/commands.interface";

const fetch: ICommand = {
  name: "fetch",
  description: "Fetches a paper from scihub",
  execute(message, args): void {
    console.log(message, args);
  },
};

export default fetch;
