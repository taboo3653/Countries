import React from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import { toggleSidePanel } from "mRedux/actions/ui";
import LanguageToggler from "components/LanguageToggler";

import dictionary from "utils/dictionary.json";

import useMultilang from "hooks/useMultilang";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between"
  },
  menuButton: { marginLeft: theme.spacing(2) },
  toolbar: { display: "flex", alignItems: "center" }
}));

const AppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getMultilang = useMultilang();

  const handleClick = () => {
    dispatch(toggleSidePanel());
  };

  return (
    <MuiAppBar position="sticky">
      <Toolbar className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          {getMultilang(dictionary.common.title)}
        </Typography>
        <div className={classes.toolbar}>
          <LanguageToggler />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
