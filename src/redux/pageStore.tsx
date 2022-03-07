import { PAGETYPE } from "./pageType";

const initialState = {
  pageInfo: [],
};
export const pageStore = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case PAGETYPE:
      return {
        ...state,
        pageInfo: state.pageInfo.concat(payload),
      };
    default:
      return state;
  }
};
