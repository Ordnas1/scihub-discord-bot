import * as cheerio from "cheerio";

const getDownloadLink = (htmlFile: string): string => {
  const $ = cheerio.load(htmlFile);
  const downloadLink = $("iframe").attr().src;

  if (!downloadLink) throw new Error("No download link found");

  return downloadLink;
};

const ScrappingService = { getDownloadLink };

export default ScrappingService;
