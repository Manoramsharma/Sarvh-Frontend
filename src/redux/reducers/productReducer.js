import { PRODUCT_TYPES } from "../actions/productAction";
const initialState = {
  whatsnew: [],
  allproducts: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPES.WHATSNEW:
      return {
        ...state,
        whatsnew: action.payload,
      };
    case PRODUCT_TYPES.ALLPRODUCTS:
      return {
        ...state,
        allproducts: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
