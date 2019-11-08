import { createMuiTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: 8,
  overrides:{
    MuiAppBar: {
      colorPrimary:{
        backgroundColor: '#160a0a'
      }
    },
    MuiButton: {
      root: {
        color: '#ffffff'
      }
    }
  }
});
export default theme;