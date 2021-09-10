import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Route from "./Components/Route";

import HomePage from "../Pages/Home";
import DetailPage from "../Pages/Detail";
import PageNotFoundPage from "../Pages/PageNotFound";

import {
  DETAIL_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PAGE_NOT_FOUND_PAGE_ROUTE,
} from "../Constants/Routes";

const Routers = () => {
  return (
    <Switch>
      <Route path={HOME_PAGE_ROUTE} exact component={HomePage} />
      <Route
        path={PAGE_NOT_FOUND_PAGE_ROUTE}
        exact
        component={PageNotFoundPage}
      />
      <Route path={DETAIL_PAGE_ROUTE} exact component={DetailPage} />
      <Redirect path="*" to={PAGE_NOT_FOUND_PAGE_ROUTE} />
    </Switch>
  );
};

export default Routers;
