/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import PageContainer from "../../Components/PageContainer";
import ArticleDetail from "../../Components/AricleDetail";

import { useArticleContext } from "../../Provider/ArticleProvider";

const DetailPage = (props) => {
  const { selectedArticle } = useArticleContext();

  React.useEffect(() => {
    if (!selectedArticle) props.history.push("/404");
  }, []);
  return (
    <div className="detail-page-container">
      <PageContainer>
        <ArticleDetail {...selectedArticle} />
      </PageContainer>
    </div>
  );
};

export default DetailPage;
