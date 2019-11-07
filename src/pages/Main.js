import React, { Component } from 'react';
import { withStyles } from '../utils/WithStyles';
import { useStyles } from '../styles/MainStyle';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { styles, theme } = this.props;
    return(
        <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={styles.appBarText}variant="h6" >
              MTG Library
          </Typography>
          <Button className={styles.appBarButton} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
  };
}

export default withStyles(Main, useStyles, useTheme);