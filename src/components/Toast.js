import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Toast = ({ msg, position, handleShow }) => {
  console.log(msg, position);
  return (
    <div>
      {toast(msg, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })}
      onClick={handleShow}
      <ToastContainer />
    </div>
  );
};
export default Toast;
