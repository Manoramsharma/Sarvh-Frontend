import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import NavbarWithLogin from "./homePage/Navbar1";
import NavbarLoggedIn from "./homePage/Navbar2";

export const Navbar = () => {
  const { auth } = useSelector(state => state);
  return <div>{auth.token ? <NavbarLoggedIn /> : <NavbarWithLogin />}</div>;
};
