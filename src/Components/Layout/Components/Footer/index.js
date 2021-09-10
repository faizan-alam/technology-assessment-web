import React from "react";

import Typography from "@material-ui/core/Typography";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="body2" color="textSecondary">
        © NY Times Most Popular
      </Typography>
    </div>
  );
};

export default Footer;
