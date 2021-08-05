import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPass from "./pages/resetPass";
// import LoginSuccess from "./components/LoginSuccess";
import Signup from "./pages/Signup";
import CategoriesProduct from "./pages/CategoryPage";
import BuyProductPage from "./pages/BuyProductPage";
import ProfilePage from "./pages/ProfilePage";

import Alert from "./components/Alert";
import { useEffect } from "react";
import {refreshToken} from "./redux/actions/authAction";
import ForgotPassword from "./pages/forgotPass";
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';

const Theme = createTheme({
  palette: {
    secondary: {
      main: "#262A53",
    },
    primary: {
      main: "#5089C6",
    },
  },
});

function App() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Alert />
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={()=> auth.token? (<Redirect to ="/"/>): (<Login/>)} />
            <Route exact path="/signup" render={()=> auth.token? (<Redirect to ="/"/>): (<Signup/>)} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/resetpass/:resetToken" component={ResetPass} />
            <Route exact path="/profile" component={auth.token ? ProfilePage : Home} />
            <Route exact path="/bycategories" component={CategoriesProduct} />
            <Route exact path="/buyproduct" component={BuyProductPage} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
