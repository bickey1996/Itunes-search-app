import axios from "axios";

export const getSearchData = async (searchtext) => {
  console.log(searchtext);
  return axios.get("https://itunes.apple.com/search" + searchtext);
};

export default getSearchData;
