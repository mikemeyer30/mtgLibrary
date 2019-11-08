import React, { Component } from 'react';
import { withStyles } from '../utils/WithStyles';
import { useStyles } from '../styles/MainStyle';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List, ListItem } from '@material-ui/core';
import mtg from 'mtgsdk';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    }
  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
    .then
  }

  render() {
    const { styles, theme } = this.props;
    return(
      <div>
        {this.renderNavBar()}
      </div>
    )
  };

  renderNavBar() {
    const { styles, theme } = this.props;
    return(
      <AppBar position="static">
          <Toolbar className={styles.toolbar}>
            <div>
              <Typography className={styles.appBarText}variant="h6">
                MTG Library
              </Typography>
            </div>
            <div className={styles.linkContainer}>
             <List className={styles.navList}>
               <ListItem>
                 <Button>
                    Home
                 </Button>
               </ListItem>
               <ListItem>
                  <Button>
                    Search
                  </Button>
               </ListItem>
               <ListItem>
                  <Button>
                    Login
                  </Button>
               </ListItem>
             </List>
            </div>
        </Toolbar>
      </AppBar>
    );
  }

  renderSearchBar() {

  }

  searchForCard(userInput) {
 
  }
}

export default withStyles(Main, useStyles, useTheme);