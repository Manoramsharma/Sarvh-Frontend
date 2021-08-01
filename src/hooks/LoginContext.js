import React, { createContext, Component, useState } from "react";
export const LoginContext = createContext();

export const LoginContextProvider = props => {
  // const [auth, setAuth] = useState([
  //   {
  //     isAuthenticated: false,
  //     token: null,
  //     fullName: "Sarvh User",
  //     avatar: null,
  //   },
  // ]);
  const [auth, setAuth] = useState([
    { isAuthenticated: false, token: null, fullName: "Sarvh", avatar: null, username: null },
  ]);
  // state = {
  //   isAuthenticated: false,
  //   token: null,
  //   fullName: "Sarvh User",
  //   avatar: null,
  // };
  // const toggleIsAuthenticated = () => {
  //   setAuth({ isAuthenticated: !this.state.isAuthenticated });
  // };
  const setAuthFunc = (authBool, token, fullName, avatar, username) => {
    setAuth([
      {
        isAuthenticated: authBool,
        token: token,
        fullName: fullName,
        avatar: avatar,
        username: username
      },
    ]);
  };
  return (
    <LoginContext.Provider value={{ auth, setAuthFunc }}>
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;
