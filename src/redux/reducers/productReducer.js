import { PRODUCT_TYPES } from "../actions/productAction";
const initialState = {
  whatsnew: [],
  allproducts: [],
  buyproduct: [],
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
    case PRODUCT_TYPES.BUYPRODUCT:
      return {
        ...state,
        buyproduct: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
