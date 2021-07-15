import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px 0px",
    color: "#111",
  },
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "none",
    // borderBottom: "1px solid #ebedee",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 54,
    borderBottom: "1px solid #ebedee",
  },
  toolbarContainer: {
    display: "flex",
    alignItems: "center",
  },
  styleLogo: {
    height: 70,
    width: 74,
  },
  inputRoot: {
    border: "solid thin #767677",
    // backgroundColor: "#ebedee",
    fontSize: "13px",
    // color: "inherit",
  },
  toolbarRight: {
    position: "relative",
    // paddingLeft: "500px",
    dislay: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      border: "solid thin #767677",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#111",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
  personIcon: {
    color: "#111",
    display: "flex",
  },
  personIconPadding: {
    padding: "0 5px",
    cursor: "pointer",
  },
  contentAdidas: {
    // marginLeft: "auto",
    // marginRight: "auto",
  },
}));
