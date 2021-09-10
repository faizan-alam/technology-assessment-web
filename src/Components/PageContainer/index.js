import React from "react";

import Empty from "./Components/Empty";
import Error from "./Components/Error";

import { useArticleContext } from "../../Provider/ArticleProvider";

const PageContainer = (props) => {
  const { loading } = useArticleContext();

  if (loading) return null;
  else if (props.error) return <Error error={props.error} />;
  else if (props.empty) return <Empty />;
  return props.children;
};

export default PageContainer;
