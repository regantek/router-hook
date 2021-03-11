import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          {/* <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute> */}
          <PrivateRoute2 path="/admin" component={Admin} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
