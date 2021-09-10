import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useArticleContext } from "../../Provider/ArticleProvider";

import "./styles.scss";

const Layout = (props) => {
  const { loading } = useArticleContext();
  return (
    <>
      <Header />
      {loading && <LinearProgress />}
      <div className="global-page-container">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
