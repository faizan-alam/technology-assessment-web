import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Tags from "./Components/Tags";

const useStyles = makeStyles((theme) => ({
  margins: {
    marginTop: "1rem",
    marginBottom: "0.5rem",
  },
}));

const Info = ({ title, by, tags = [] }) => {
  const classes = useStyles();
  return (
    <div className={classes.margins}>
      <Typography className={classes.margins} variant="h3" component="h2">
        {title}
      </Typography>

      <Typography className={classes.margins} variant="h6" color="primary">
        {by}
      </Typography>
      <Tags data={tags} />
    </div>
  );
};

export default Info;
