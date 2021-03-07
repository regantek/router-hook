import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Recipes from "../components/Blogs/Recipes";
import Car from "../components/Blogs/Car";
import Dog from "../components/Blogs/Dog";

const Blog = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        <li>
          <Link to={`${url}/recipes`}>Recipes</Link>
        </li>
        <li>
          <Link to={`${url}/car`}>Car</Link>
        </li>
        <li>
          <Link to={`${url}/dog`}>Dog</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/recipes`}>
          <Recipes />
        </Route>
        <Route path={`${path}/car`}>
          <Car />
        </Route>
        <Route path={`${path}/dog`}>
          <Dog />
        </Route>
      </Switch>
    </div>
  );
};

export default Blog;
