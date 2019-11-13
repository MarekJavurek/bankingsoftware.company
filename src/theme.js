import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#223453"
    },
    secondary: grey,
    backgroundColor: "#ebebeb",
    orange: "#3f51b5"
  }
});
