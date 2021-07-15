import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./ImageContainer.style";
import imgAdidas from "../../Container/img/adidas.png";

const ImageContainer = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid className={classes.marginImage}>
        <img src={imgAdidas} />
      </Grid>
    </Grid>
  );
};

export default ImageContainer;
