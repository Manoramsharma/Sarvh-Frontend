import { GLOBALTYPES } from "./globalTypes";
export const TYPES = {
  NOTIFY: GLOBALTYPES.ALERT,
};
export const login = data => dispatch => {
  try {
    console.log(data);
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
  } catch (err) {}
};
