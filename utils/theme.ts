import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
});

export default theme;
