import { Typography, TextField, Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Login.style";

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <div>
          <div className={classes.name}>
            <Typography>Name</Typography>
            <TextField type="text"></TextField>
          </div>
          <div className={classes.password}>
            <Typography>Password</Typography>
            <TextField type="text"></TextField>
          </div>
        </div>
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </>
  );
};

export default Login;
