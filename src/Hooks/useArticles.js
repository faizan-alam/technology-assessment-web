/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import API from "../Services/Api";

import { useArticleContext } from "../Provider/ArticleProvider";

const useArticles = () => {
  const { dayLimit, search, setLoading } = useArticleContext();
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  const fetchData = () => {
    setLoading(true);
    API.getArticles(dayLimit)
      .then((res) => {
        setResponse(res.data.results);
        setError(false);
      })
      .catch((err) => {
        setError("something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchSearchData = () => {
    fetchData();
    // SEARCH WAS OUT OF SCOPE BUT IN THE UI
  };

  useEffect(() => {
    if (search) fetchSearchData();
    else fetchData();
  }, [dayLimit, search]);

  return { response, error };
};

export default useArticles;
