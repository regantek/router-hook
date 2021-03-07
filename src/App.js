import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      {/* <h1>Router Example</h1> */}

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
