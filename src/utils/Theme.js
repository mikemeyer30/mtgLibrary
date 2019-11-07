import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides:{
    MuiAppBar: {
      colorPrimary:{
        backgroundColor: '#160a0a'
      }
    }
  }
});
export default theme;