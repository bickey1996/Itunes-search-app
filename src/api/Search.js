import axios from "axios";

export const getSearchData = async (searchtext) => {
  console.log(searchtext);
  return axios.get("https://itunes.apple.com/search" + searchtext, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
};

export default getSearchData;
