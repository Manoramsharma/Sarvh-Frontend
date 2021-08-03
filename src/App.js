import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginSuccess from "./components/LoginSuccess";
import Signup from "./pages/Signup";
import CategoriesProduct from "./pages/CategoryPage";
import BuyProductPage from "./pages/BuyProductPage";
import ProfilePage from "./pages/ProfilePage";

import LoginContextProvider from "./hooks/LoginContext";
import Alert from "./components/Alert";
import { useEffect } from "react";
import {refreshToken} from "./redux/actions/authAction";
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
            <Route exact path="/login" component={auth.token ? Home : Login} />
            <Route exact path="/signup" component={auth.token ? Home : Signup} />
        </div>
      </Router>
    </ThemeProvider>
    // <ThemeProvider theme={Theme}>

    //   <LoginContextProvider>
    //     <Router>
    //       <Notify/>
    //       <Switch>
    //         <Route exact path="/">
    //           <Home />
    //         </Route>
    //         <Route exact path="/login">
    //           <Login />
    //         </Route>
    //         <Route exact path="/login/success">
    //           <LoginSuccess />
    //         </Route>
    //         <Route path="/signup">
    //           <Signup />
    //         </Route>
    //         <Route path="/bycategories">
    //           <CategoriesProduct />
    //         </Route>
    //         <Route path="/buyproduct">
    //           <BuyProductPage />
    //         </Route>
    //         <Route path="/profile/:user_name_param">
    //         <ProfilePage />
    //       </Route>
    //       </Switch>
    //     </Router>
    //   </LoginContextProvider>

    // </ThemeProvider>
  );
}

export default App;
