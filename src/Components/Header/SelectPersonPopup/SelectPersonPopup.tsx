import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "../SelectPersonPopup/SelectPersonPopup.style";
import { CATEGORY } from "./constants";
import clsx from "classnames";
import Popover from "@material-ui/core/Popover";

const SelectPersonPopup = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl]: any = useState(null);

  const handlePopoverOpen = (name: any) => {
    setAnchorEl(name);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid className={classes.root}>
      <Grid className={classes.content}>
        {CATEGORY.map((item: any, i: any) => {
          return (
            <Button
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              className={clsx(
                item.name !== "SPORT" &&
                  item.name !== "BRANDS" &&
                  classes.contentButton
              )}
              onMouseEnter={() => handlePopoverOpen(item.name)}
              onClick={() => handlePopoverOpen(item.name)}
              onMouseLeave={handlePopoverClose}
            >
              {item.name}
            </Button>
          );
        })}
        <Popover
          id="mouse-over-popover"
          open={open}
          anchorEl={anchorEl}
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
        >
          <Typography className={classes.typo}>
            The content of the Popover.
          </Typography>
        </Popover>
      </Grid>
    </Grid>
  );
};

export default SelectPersonPopup;
