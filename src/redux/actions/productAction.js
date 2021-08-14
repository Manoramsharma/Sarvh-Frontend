import { GLOBALTYPES } from "./globalTypes";
import { postDataAPI } from "../../utils/fetchData";

export const uploadProduct = (auth, data) => async dispatch => {
  try {
    console.log(data);
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await postDataAPI(`uploadfile`, data, auth.token);
    console.log(res);
  } catch (err) {}
};
