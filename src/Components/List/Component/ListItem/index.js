import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "./Components/Avatar";

import MaterialListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { useArticleContext } from "../../../../Provider/ArticleProvider";

const ListItem = (props) => {
  const history = useHistory();
  const { setSelectedArticle } = useArticleContext();

  const handleArticleDetail = () => {
    history.push(`/${props.title}`);
    setSelectedArticle(props);
  };

  return (
    <MaterialListItem>
      <ListItemAvatar>
        <Avatar img={props.media} />
      </ListItemAvatar>
      <ListItemText primary={props.title} secondary={props.byline} />
      <ListItemSecondaryAction onClick={handleArticleDetail}>
        <IconButton edge="end">
          <ArrowForwardIosIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </MaterialListItem>
  );
};

export default ListItem;
