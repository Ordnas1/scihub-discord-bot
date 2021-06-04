import * as dotenv from "dotenv";
dotenv.config();

const Config = {
  token: process.env.BOT_TOKEN,
  prefix: "sci!",
};

export default Config;
