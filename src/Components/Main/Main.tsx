import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./Main.style";

const Main = () => {
  const classes = useStyles();
  const [listUser, setListUser]: any = useState([]);
  const [userName, setUserName] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const btnClick = () => {
    const user: any = {
      userName,
    };

    if (user.userName === "") return null;

    listUser.push(user);
    setUserName("");
  };

  const onchangeText = (event: any) => {
    setUserName(event.target.value);
  };

  const btnClickDelete = (value: any) => {
    const newListUser = listUser.filter((user: any) => user.userName !== value);
    setListUser(newListUser);
  };

  const btnClickEdit = (userName: any) => {
    console.log("userName: ", userName);
    const newListUser = listUser.filter(
      (user: any) => user.userName === userName
    );

    if (userName === newListUser.useName) {
      setIsDisable(true);
    }

    // const findName = listUser.findIndex(
    //   (list: any) => list.username === userName
    // );
    // const removeName = btn
  };

  const displayArray = () => {
    // setIsDisable(true);
    return listUser.map((event: any) => (
      <div>
        <TextField disabled={!isDisable} value={event.userName}></TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            btnClickDelete(event.userName);
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            btnClickEdit(event.userName);
          }}
        >
          Edit
        </Button>
      </div>
    ));
  };

  return (
    <div className={classes.container}>
      <div>
        <div>
          <div>
            <TextField
              id="filled-full-width"
              label="Input name"
              style={{ margin: 8 }}
              placeholder="Name"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={userName}
              onChange={(e) => {
                onchangeText(e);
              }}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                btnClick();
              }}
            >
              Add
            </Button>
          </div>
        </div>
        <div>{displayArray()}</div>
      </div>
    </div>
  );
};

export default Main;
