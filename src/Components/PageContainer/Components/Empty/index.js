import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

import EmptyImage from "../../../../Assets/Images/empty.png";

import "./styles.scss";

const Empty = () => {
  const history = useHistory();
  const handleGoToHome = () => history.push("/");
  return (
    <div className="empty-container">
      <img src={EmptyImage} alt="empty" />
      <Typography variant="body1">No Data Found</Typography>
      <Button variant="outlined" color="primary" onClick={handleGoToHome}>
        Home
      </Button>
    </div>
  );
};

export default Empty;
