import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const getSearchData = async (searchtext) => {
  console.log(searchtext);
  return axios.get("https://itunes.apple.com/search" + searchtext);
};

export default getSearchData;
