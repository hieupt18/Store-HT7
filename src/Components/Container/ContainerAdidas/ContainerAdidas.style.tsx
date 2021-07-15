import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    color: "#111",
  },
  root: {
    margin: "60px 0 50px",
    color: "#111",
    textTransform: "uppercase",
    textAlign: "center",
  },
  title: {
    color: "#111",
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "30px",
    fontFamily: "AdineuePRO ,Helvetica, Arial, sans-serif",
    letterSpacing: "1.5px",
    lineHeight: "28px",
    fontWeight: 700,
  },
  button: {
    // border: "1px solid #767677",
  },
  buttonStyle: {
    border: "1px solid #d3d7da",
    marginLeft: "10px",
    "&:hover": {
      border: "1px solid #767677",
    },
  },
  root2: {
    display: "inline-flex",
    color: "#111",
    textTransform: "uppercase",
  },
  styleImage: {
    margin: "0 20px 20px 0px",
    width: "410px",
  },
  displayImage: {
    margin: "0 10px 20px 0px",
    display: "flex",
  },
  styleImage2: {
    margin: "0 0 20px 0px",
  },
  imageContent: {
    textAlign: "left",
  },
  typoContent: {
    padding: "0 0 10px 0",
    fontStyle: "normal",
    fontWeight: 700,
  },
  buttonContent: {
    border: "1px solid #767677",
    height: 50,
    width: 200,
    fontSize: 13,
    fontWeight: 600,
    paddingRight: "60px",
  },
  displayContant: {
    textAlign: "left",
  },
  buttonArrow: {
    position: "absolute",
    padding: theme.spacing(0, 2),
  },
  arrivalsContent: {
    color: "#111",
    textAlign: "left",
    fontFamily: "inherit",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "30px",
    lineHeight: "28px",
    margin: "20px 0",
    textShadow: "0px 0px 1px #B09F6E",
  },
  divContent: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "1280px",
  },
  scrollList: {
    display: "flex",
    overflowX: "scroll",
    // Hide scrollbar for Chrome, Safari and Opera
    "&::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    whiteSpace: "nowrap",
  },
  "scrollList::-webkit-scrollbar": {
    display: "none",
  },
  contentImg: {
    marginRight: "10px",
    cursor: "pointer",
  },
  contentNewImg: {
    marginRight: "10px",
    "&:hover": {
      border: "solid 1px #000",
    },
    cursor: "pointer",
  },
  sizeImage: {
    margin: "0 0",
  },
  downLineTitle: {
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "22px",
    fontFamily: "inherit",
    paddingBottom: "10px",
  },
  downLinedescription: {
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    fontSize: "16px",
    lineHeight: "22px",
    fontFamily: "inherit",
  },
  contentShose: {
    margin: "7px",
  },
  contentSex: {
    color: "#767677",
    fontSize: "12px",
    whiteSpace: "nowrap",
    paddingBottom: "5px",
  },
  downTitle: {
    fontSize: "12px",
    paddingBottom: "5px",
  },
}));
