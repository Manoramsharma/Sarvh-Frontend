import { ThemeProvider, createTheme } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import LoginSuccess from "./components/LoginSuccess";
import Signup from "./components/Signup";
import CategoriesProduct from "./pages/CategoryPage";
import BuyProductPage from "./pages/BuyProductPage";
import ProfilePage from "./pages/ProfilePage";

import LoginContextProvider from "./hooks/LoginContext";

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
  return (
    <ThemeProvider theme={Theme}>

      <LoginContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/login/success">
              <LoginSuccess />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/bycategories">
              <CategoriesProduct />
            </Route>
            <Route path="/buyproduct">
              <BuyProductPage />
            </Route>
            <Route path="/profile/:user_name_param">
            <ProfilePage />
          </Route>
          </Switch>
        </Router>
      </LoginContextProvider>
    </ThemeProvider>
  );
}

export default App;
