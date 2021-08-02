import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
toast.configure();
const Notify = () => {
  const { alert } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      {alert.loading && <h1>Loading</h1>}
      {alert.error && (
        <Toast
          msg={alert.error}
          position="top-right"
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
        />
      )}
      {alert.success && (
        <Toast
          msg={alert.success}
          position="top-right"
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
        />
      )}
      <ToastContainer />

    </div>
  );
};
export default Notify;
