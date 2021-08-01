export const TYPES = {
    NOTIFY: "NOTIFY",
  };
  export const login = data => dispatch => {
    try {
      console.log(data);
      dispatch({type: 'NOTIFY', payload:{loading: true}})
    } catch (err) {}
  };
  