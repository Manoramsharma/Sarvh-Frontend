import { getDataAPI, patchDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES, EditData, DeleteData } from "./globalTypes";

export const PROFILE_TYPES = {
  LOADING: "LOADING",
  GET_USER: "GET_USER",
  FOLLOW: "FOLLOW",
  UNFOLLOW: "UNFOLLOW",
  GETPRODUCT: 'GETPRODUCT'
};
export const getProfileUsers =
  ({ users, id, auth }) =>
  async dispatch => {
    if (users.every(user => user.username !== id)) {
      try {
        dispatch({ type: PROFILE_TYPES.LOADING, payload: true });
        const res = await getDataAPI(`/user/${id}`, auth.token);
        const res2 = await getDataAPI(`/product/${id}`, auth.token);
        console.log(res)
        console.log(res2)
        dispatch({
          type: PROFILE_TYPES.GET_USER,
          payload: res.data,
        });
        dispatch({
          type: PROFILE_TYPES.GETPRODUCT,
          payload: res2.data,
        })
        dispatch({ type: PROFILE_TYPES.LOADING, payload: false });
      } catch (err) {
        console.log(err);
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { error: err.response.data.msg },
        });
      }
    }
  };

export const follow =
  ({ users, user, auth }) =>
  async dispatch => {
    console.log(user);
    var newUser = { ...user, followers: [...user.followers, auth.user] };
    dispatch({
      type: PROFILE_TYPES.FOLLOW,
      payload: newUser,
    });
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        ...auth,
        user: {
          ...auth.user,
          following: [...auth.user.following, newUser],
        },
      },
    });
    try {
      const res = await patchDataAPI(
        `/user/${user._id}/follow`,
        null,
        auth.token
      );
      console.log(res);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

export const unfollow =
  ({ users, user, auth }) =>
  async dispatch => {
    var newUser = {
      ...user,
      followers: DeleteData(user.followers, auth.user.username),
    };
    console.log(newUser);
    dispatch({ type: PROFILE_TYPES.UNFOLLOW, payload: newUser });
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        ...auth,
        user: {
          ...auth.user,
          following: DeleteData(auth.user.following, newUser.username),
        },
      },
    });
    try {
      await patchDataAPI(`/user/${user._id}/unfollow`, null, auth.token);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };
