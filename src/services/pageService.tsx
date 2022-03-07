import axios from "axios";

export const pageService = (pageNumber: any) => {
  return axios.get(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`
  );
};
