import React from "react";
import className from "classnames";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import SearchBox from "./Components/SearchBox";
import Filter from "./Components/Filter";

const useStyles = makeStyles((theme) => ({
  appBarInvert: {
    background: theme.palette.common.white,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const [isSearchBox, setSearchBox] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleGoToHome = () => history.push("/");
  const handleToggleSearchButton = () => setSearchBox(!isSearchBox);

  const renderHeader = () => (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.root}
        onClick={handleGoToHome}
      >
        NY Times Most Popular
      </Typography>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        onClick={handleToggleSearchButton}
      >
        <SearchIcon />
      </IconButton>
      <Filter />
    </>
  );

  const renderSearchBox = () => (
    <SearchBox
      className={classes.root}
      onToggleSearchButton={handleToggleSearchButton}
    />
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={className({ [classes.appBarInvert]: isSearchBox })}
      >
        <Toolbar variant="dense">
          {isSearchBox ? renderSearchBox() : renderHeader()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
