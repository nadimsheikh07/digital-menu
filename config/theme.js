import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#ff5722',
    },
    error: {
      main: '#ef5350',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;