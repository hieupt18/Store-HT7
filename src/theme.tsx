import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {},
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "none",
        },
      },
    },
  },
});

export default theme;
