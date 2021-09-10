import React from "react";
import Chip from "@material-ui/core/Chip";

const Tags = ({ data = [] }) => {
  return data.map((row) => <Chip key={row} label={row} />);
};

export default Tags;
