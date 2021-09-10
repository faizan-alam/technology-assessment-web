import _axios from "axios";

const axios = _axios.create({
  baseURL: "https://api.nytimes.com/svc/mostpopular/v2/",
  timeout: 60000,
  params: {
    "api-key": process.env.REACT_APP_NY_TOKEN,
  },
});

const getArticles = (dayLimit) => axios.get(`/viewed/${dayLimit}.json`);

const API = {
  getArticles,
};

export default API;
