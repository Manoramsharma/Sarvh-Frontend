import { PRODUCT_TYPES } from "../actions/productAction";
const initialState = {
  whatsnew: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPES.WHATSNEW:
      return {
        ...state,
        whatsnew: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
