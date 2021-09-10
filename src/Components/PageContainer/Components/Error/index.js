import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

import ErrorImage from "../../../../Assets/Images/error.png";

import "./styles.scss";

const Error = ({ error }) => {
  const history = useHistory();
  const handleGoToHome = () => history.push("/");
  return (
    <div className="error-container">
      <img src={ErrorImage} alt="Error" />
      <Typography variant="body1">{error}</Typography>
      <Button variant="outlined" color="primary" onClick={handleGoToHome}>
        Home
      </Button>
    </div>
  );
};

export default Error;
