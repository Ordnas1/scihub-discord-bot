import axios from "axios";
import Config from "../utils/config";

const getPaper = async (DOI: string[]): Promise<any> => {
  try {
    const request = await axios.get(`${Config.rootUrl}/${DOI[0]}`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

const SciHubService = { getPaper };

export default SciHubService;
