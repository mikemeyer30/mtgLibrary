import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between',

  },
  appBarText:{
    flex: 1
  },
  appBarButton:{
    flex: 1
  }
}));
  