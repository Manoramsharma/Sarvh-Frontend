import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../hooks/LoginContext";
const LoginSuccess = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.close();
  //   }, 1000);
  //   // setTemp=false;
  // });
  const { auth, setAuthFunc } = useContext(LoginContext);
  console.log(auth);
  const handleClick = () => {
    setAuthFunc("tokenn", "fullname", "avatar");
  };
  return (
    <div>
      <div>Login Success</div>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};
export default LoginSuccess;
