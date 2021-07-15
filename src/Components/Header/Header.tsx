import { AppBar, Link, Toolbar, InputBase, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Header.style";
import logo from "./image/logo.png";
import SelectPersonPopup from "./SelectPersonPopup/SelectPersonPopup";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import ContainerAdidas from "../Container/ContainerAdidas/ContainerAdidas";

const Header = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid>
            <Link href="/header">
              <img alt="logo" src={logo} className={classes.styleLogo} />
            </Link>
          </Grid>
          <Grid className={classes.toolbarContainer}>
            <SelectPersonPopup />
          </Grid>
          <Grid className={classes.toolbarRight}>
            <Grid className={classes.searchIcon}>
              <SearchIcon />
            </Grid>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Grid>
          <Grid className={classes.personIcon}>
            <Grid className={classes.personIconPadding}>
              <PersonIcon />
            </Grid>
            <Grid className={classes.personIconPadding}>
              <FavoriteBorderIcon />
            </Grid>
            <Grid className={classes.personIconPadding}>
              <LocalGroceryStoreIcon />
            </Grid>
          </Grid>
        </Toolbar>
        <Grid>{/* <ImageContainer /> */}</Grid>
        <Grid className={classes.contentAdidas}>
          <ContainerAdidas />
        </Grid>
      </AppBar>
    </Grid>
  );
};

export default Header;
