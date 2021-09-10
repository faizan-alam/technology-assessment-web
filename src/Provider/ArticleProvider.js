import React, { createContext, useContext, useState } from "react";

const ArticleContext = createContext({
  data: [],
  search: "",
  selectedArticle: null,
  loading: false,
  dayLimit: 7,
  setDayLimit: () => null,
  setSelectedArticle: () => null,
  setData: () => null,
  setLoading: () => null,
  setSearch: () => null,
});
export const useArticleContext = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [dayLimit, setDayLimit] = useState(7);

  const contextValue = {
    data,
    loading,
    search,
    setData,
    dayLimit,
    setDayLimit,
    selectedArticle,
    setSelectedArticle,
    setLoading,
    setSearch,
  };
  return (
    <ArticleContext.Provider value={contextValue}>
      {children}
    </ArticleContext.Provider>
  );
};
