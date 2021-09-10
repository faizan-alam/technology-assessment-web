import React from "react";

import PageContainer from "../../Components/PageContainer";
import List from "../../Components/List";

import useArticles from "../../Hooks/useArticles";

const HomePage = () => {
  const { response, error } = useArticles();
  return (
    <div className="home-page-container">
      <PageContainer empty={!response?.length} error={error}>
        <List data={response} />
      </PageContainer>
    </div>
  );
};

export default HomePage;
