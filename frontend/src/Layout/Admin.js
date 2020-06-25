import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../screen/Home";
import Header from "../component/Header";
import DetailPost from "../screen/DetailPost";
import Login from "../screen/Login";
export const history = createBrowserHistory();

const MainLayout = () => {
  const [changecolor, setChangeColor] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 0 ? setChangeColor(true) : setChangeColor(false);
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <BrowserRouter>
      <Router history={history}>
        <Header changecolor={changecolor} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/:id" component={DetailPost} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default MainLayout;
