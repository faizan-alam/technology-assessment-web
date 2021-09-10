import React from "react";
import Chip from "@material-ui/core/Chip";

const Tags = ({ data = [] }) => {
  return data.map((row) => <Chip label={row} />);
};

export default Tags;
