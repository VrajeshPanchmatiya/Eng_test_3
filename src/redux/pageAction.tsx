import { pageService } from "../services/pageService";
import { PAGETYPE } from "./pageType";

export const pageAction = (pageNumber: number) => {
  return async (dispatch: any) => {
    const res = await pageService(pageNumber);
    dispatch({ type: PAGETYPE, payload: res.data.hits });
  };
};
