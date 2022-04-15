import * as dotenv from "dotenv";
dotenv.config();

const Config = {
  token: process.env.BOT_TOKEN,
  rootUrl: process.env.SCIHUB_ROOT_URL,
  prefix: "sci!",
};

export default Config;
