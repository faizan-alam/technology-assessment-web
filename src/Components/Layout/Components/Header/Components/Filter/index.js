import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

import MoreIcon from "@material-ui/icons/MoreVert";

import { DAY } from "../../../../../../Constants/Filter";
import { useArticleContext } from "../../../../../../Provider/ArticleProvider";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Filter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const { dayLimit, setDayLimit } = useArticleContext();

  const handleSelect = (selectedItem) => {
    setAnchorEl(null);
    setDayLimit(selectedItem);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        className={classes.menuButton}
        onClick={handleOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {DAY.map((item) => (
          <MenuItem
            key={item}
            onClick={(e) => handleSelect(item)}
            selected={item === dayLimit}
          >
            {item} Days
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Filter;
