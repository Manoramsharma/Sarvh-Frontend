import { ThemeProvider, createTheme } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import CategoriesProduct from "./pages/CategoryPage";
import BuyProductPage from "./pages/BuyProductPage";
import ProfilePage from "./pages/ProfilePage";
const Theme = createTheme({
  palette: {
    secondary: {
      main : "#262A53"
    },
    primary: {
      main : "#5089C6"
    }
  },
  
});



function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
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
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
