import React from "react";

import MaterialList from "@material-ui/core/List";

import ListItem from "./Component/ListItem";

const List = ({ data = [] }) => {
  return (
    <MaterialList data-testid="list-container">
      {data.map((row) => (
        <ListItem {...row} key={row.id} />
      ))}
    </MaterialList>
  );
};

export default List;
