import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPass from "./pages/resetPass";
import Signup from "./pages/Signup";
import CategoriesProduct from "./pages/CategoryPage";
import BuyProductPage from "./pages/BuyProductPage";
import ProfilePage from "./pages/ProfilePage";
import test from "./pages/test";
import Alert from "./components/Alert";
import { useEffect } from "react";
import { refreshToken } from "./redux/actions/authAction";
import ForgotPassword from "./pages/forgotPass";
import Category from "./pages/Category";
import ProductUpload from "./pages/productUplaod";
import ErrorPage from "./pages/ErrorPage";
import SellPage from "./pages/sellOnSarvhPage";
import EditProfilePage from "./pages/EditProfile";
import Cart from "./pages/Cart";
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/login"
              render={() => (auth.token ? <Redirect to="/" /> : <Login />)}
            />
            <Route
              exact
              path="/signup"
              render={() => (auth.token ? <Redirect to="/" /> : <Signup />)}
            />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/resetpass/:resetToken" component={ResetPass} />
            <Route
              exact
              path="/profile/:id"
              component={auth.token ? ProfilePage : Home}
            />
            <Route exact path="/bycategories" component={CategoriesProduct} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/buyproduct/:id" component={BuyProductPage} />
            <Route exact path="/uploadproduct" component={ProductUpload} />
            <Route exact path="/test" component={test} />
            <Route exact path="/sellonsarvh" component={SellPage} />
            <Route exact path="/cart" component={Cart} />
            <Route
              exact
              path="/editprofile"
              component={auth.token ? EditProfilePage : Home}
            />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
