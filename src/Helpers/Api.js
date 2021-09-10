import axios from "axios";

export default axios.create({
  baseURL: "https://api.nytimes.com/svc/mostpopular/v2/",
  timeout: 60000,
  params: {
    "api-key": process.env.REACT_APP_NY_TOKEN,
  },
});
