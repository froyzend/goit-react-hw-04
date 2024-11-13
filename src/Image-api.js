import axios from "axios";

const API_KEY = "35g1NA-GoSKeP7Oco6_nVMROnh964Sx5yrq621mwF8M";
axios.defaults.baseURL = "https://api.unsplash.com/";

const FetchImg = async (query, per_page = 10, page = 1) => {
  const response = await axios.get(
    `/search/photos?query=${query}&per_page=${per_page}&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    }
  );
  return response.data.results;
};

export default FetchImg;
