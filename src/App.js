import "./App.css";
import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import ContactUs from "./Components/Contact/ContactUs";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
