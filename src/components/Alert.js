import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Loading from "./Loading";
import Toast from "./Toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
toast.configure();
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const Notify = () => {
  const { alert } = useSelector(state => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div>
      {alert.loading && <LinearProgress />}
      {alert.error && (
        <Toast
        type="error"
          msg={alert.error}
          position="top-right"
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
        />
      )}
      {alert.success && (
        <Toast
        type="success"
          msg={alert.success}
          position="top-right"
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
        />
      )}
      {/* <ToastContainer /> */}
    </div>
  );
};
export default Notify;
