import { GLOBALTYPES } from "../actions/globalTypes";
const initialState={}
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
export default productReducer;
