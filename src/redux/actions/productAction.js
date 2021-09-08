import { GLOBALTYPES } from "./globalTypes";
import { postDataAPI, getDataAPI } from "../../utils/fetchData";
export const PRODUCT_TYPES = {
  WHATSNEW: "WHATSNEW",
  ALLPRODUCTS: "ALLPRODUCTS",
  BUYPRODUCT: "BUYPRODUCT",
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
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (err) {}
};
export const getProduct = data => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await getDataAPI(`product`);
    console.log(res);
    dispatch({
      type: PRODUCT_TYPES.WHATSNEW,
      payload: res.data.product,
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (error) {
    console.log(error);
  }
};
export const getAllProducts = data => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await getDataAPI(`allproducts`);
    dispatch({
      type: PRODUCT_TYPES.ALLPRODUCTS,
      payload: res.data.result,
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (error) {
    console.log(error);
  }
};
export const byProductId = data => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await getDataAPI(`byproductid/${data}`);
    dispatch({
      type: PRODUCT_TYPES.BUYPRODUCT,
      payload: res.data.product,
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (error) {
    console.log(error);
  }
};
