import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Toast = ({type, msg, position, handleShow }) => {
  console.log(msg, position);
  if(type==="error"){
    return (
      <div>
        {toast.error(msg, {
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
  } else if(type==="success"){
    return (
      <div>
        {toast.success(msg, {
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
  }
};
export default Toast;
