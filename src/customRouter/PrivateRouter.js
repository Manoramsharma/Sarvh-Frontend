import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ props }) => {
    console.log("in private router")
  const firstLogin = localStorage.getItem("firstLogin");
  console.log(firstLogin)
  return firstLogin ? <Route {...props} /> : <Redirect to="/" />;
};
export default PrivateRouter;