import Registration from "./components/registration";
import Navbarcomp from "./components/navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Navbarcomp /> <Login />
          </Route>
          <Route path="/" exact>
            <Navbarcomp /> <Registration />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
