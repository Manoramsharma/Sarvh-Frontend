import { GLOBALTYPES } from "./globalTypes";
import { postDataAPI, getDataAPI } from "../../utils/fetchData";
export const PRODUCT_TYPES = {
  WHATSNEW: "WHATSNEW",
};
export const uploadProduct = (auth, data) => async dispatch => {
  try {
    console.log(data);
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await postDataAPI(`uploadfile`, data, auth.token);
    console.log(res);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg,
      },
    });
  } catch (err) {}
};
export const getProduct = data => async dispatch => {
  try {
    const res = await getDataAPI(`product`);
    console.log(res);
    console.log(res.data.product);
    dispatch({
      type: PRODUCT_TYPES.WHATSNEW,
      payload: res.data.product,
    });
  } catch (error) {
    console.log(error);
  }
};
