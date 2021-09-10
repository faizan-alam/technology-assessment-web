import React from "react";
import className from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";

import { useArticleContext } from "../../../../../../Provider/ArticleProvider";

import "./style.scss";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const SearchBox = (props) => {
  const classes = useStyles();
  const [searchText, setSearchText] = React.useState("");

  const { search, setSearch } = useArticleContext();

  const handleSearchInput = (event) => setSearchText(event?.target?.value);

  const handleSearchButton = () => {
    setSearch(searchText);
    if (!searchText) props.onToggleSearchButton();
  };

  React.useEffect(() => {
    setSearchText(search);
  }, [search]);

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      />
      <div className={className(props.className, "search-box-container")}>
        <input
          placeholder="Search"
          onChange={handleSearchInput}
          value={searchText}
        />
      </div>
      <IconButton
        className={classes.menuButton}
        onClick={handleSearchButton}
        color="primary"
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        className={classes.menuButton}
        onClick={props.onToggleSearchButton}
        color="primary"
      >
        <CancelIcon />
      </IconButton>
    </>
  );
};

export default SearchBox;
