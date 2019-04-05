import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Alarm from '@material-ui/icons/Alarm';
import Toolbar from '@material-ui/core/Toolbar';

import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
  headerToolbar: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#0e3366',
  },
  menuButton: {
    marginLeft: -theme.spacing.unit,
  },
});

function Header(props) {
  const {classes, onDrawerToggle} = props;

  return (
    <React.Fragment>
      <AppBar color='primary' position='sticky' elevation={0}>
        <Toolbar className={classes.headerToolbar}>
          <Grid container spacing={8} alignItems='center'>
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color='inherit'
                  aria-label='Open drawer'
                  onClick={onDrawerToggle}
                  className={classes.menuButton}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <IconButton color='inherit'>
                <NotificationsIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color='inherit'>
                <Alarm />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
