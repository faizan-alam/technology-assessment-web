import React from "react";
import propTypes from "prop-types";

import { Route as ReactRouter } from "react-router-dom";

import Layout from "../../Components/Layout";

const Route = (props) => {
  const route = <ReactRouter {...props} />;
  switch (props.withoutLayout) {
    case true:
      return route;
    default:
      return <Layout>{route}</Layout>;
  }
};

export default Route;

Route.PropsTypes = {
  withoutLayout: propTypes.bool,
};
