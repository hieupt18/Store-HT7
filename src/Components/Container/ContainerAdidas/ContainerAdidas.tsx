import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./ContainerAdidas.style";
import AdidasPerform from "../../Header/image/adidas-performance-logo.jpeg";
import Adidas1 from "../../Header/image/adidas1.png";
import Adidas2 from "../../Header/image/adidas2.png";

import { IMAGE, NEW } from "./constants";

const ContainerAdidas = () => {
  const classes = useStyles();

  const renderWhatHot = () => {
    return IMAGE.map((data) => (
      <Grid className={classes.contentImg}>
        <div className={classes.sizeImage}>
          <img src={data.image} />
        </div>
        <Typography className={classes.downLineTitle}>{data.title}</Typography>
        <Typography className={classes.downLinedescription}>
          {data.description}
        </Typography>
      </Grid>
    ));
  };

  const renderNewArrivals = () => {
    return NEW.map((data) => (
      <Grid className={classes.contentNewImg}>
        <div className={classes.sizeImage}>
          <img src={data.image} />
        </div>
        <div className={classes.contentShose}>
          <Typography className={classes.contentSex}>
            {data.sex} {"Originals"}
          </Typography>
          <Typography className={classes.downTitle}>{data.title}</Typography>
          <Typography className={classes.downTitle}>{data.price}</Typography>
        </div>
      </Grid>
    ));
  };

  return (
    <Grid className={classes.main}>
      <Grid className={classes.root}>
        <Grid className={classes.title}>POPULAR RIGHT NOW</Grid>
        <Grid className={classes.button}>
          <Button className={classes.buttonStyle}>ULTRABOOST 21 </Button>
          <Button className={classes.buttonStyle}>NMD</Button>
          <Button className={classes.buttonStyle}>Superstar</Button>
          <Button className={classes.buttonStyle}>SLIDES</Button>
          <Button className={classes.buttonStyle}>ULTRABOOST</Button>
        </Grid>
      </Grid>
      <div className={classes.divContent}>
        <Grid className={classes.root2}>
          <Grid className={classes.imageContent}>
            <img
              src={AdidasPerform}
              className={classes.styleImage}
              alt="AdidasPerform"
            />
            <Typography className={classes.typoContent}>
              {"FORWARD MOTION IS COMING"}
            </Typography>
            <Button className={classes.buttonContent}>{"DOWNLOAD APP"}</Button>
          </Grid>
          <Grid className={classes.displayImage}>
            <Grid className={classes.displayContant}>
              <img
                src={Adidas1}
                className={classes.styleImage2}
                alt="Adidas1"
              />
              <img
                src={Adidas2}
                className={classes.styleImage2}
                alt="Adidas2"
              />
              <Typography className={classes.typoContent}>
                {"PHARRELL WILLIAMS TRIPLE BLACK COLLECTION"}
              </Typography>
              <Grid>
                <Button className={classes.buttonContent}>SHOP NOW</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div>
          <Grid container>
            <Typography className={classes.arrivalsContent}>
              {"WHAT'S HOT"}
            </Typography>
            <Grid item container xs={12}>
              <div className={classes.scrollList}>{renderWhatHot()}</div>
            </Grid>
          </Grid>
          <Grid>
            <Typography className={classes.arrivalsContent}>
              {"NEW ARRIVALS"}
            </Typography>
            <Grid item container xs={12}>
              <div className={classes.scrollList}>{renderNewArrivals()}</div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default ContainerAdidas;
