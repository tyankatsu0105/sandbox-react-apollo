import { lightBlue, deepOrange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

/**
 * material-ui theme color pallete
 * @see https://material-ui.com/style/color/
 */
export const customTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lightBlue,
    error: deepOrange
  },
  typography: {
    fontFamily: ['"Noto Sans JP"', 'Roboto', '"Helvetica Neue"', 'Arial'].join(
      ','
    )
  }
});