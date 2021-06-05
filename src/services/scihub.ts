import axios from "axios";

const getPaper = async (DOI: string[]): Promise<any> => {
  try {
    const request = await axios.get(`https://sci-hub.do/${DOI[0]}`);
    return request.data;
  } catch (error) {
    console.error(error);
  }
};

const SciHubService = { getPaper };

export default SciHubService;
