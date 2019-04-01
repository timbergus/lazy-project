// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';

import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { GET_COUNTER } from '../apollo/queries';

type Props = {
  history: Array<string>,
  location: Object,
  counter: Object,
  classes: Object,
}

type State = {
  color: string,
}

const styles = () => ({
  toolbar: {
    justifyContent: 'space-between',
  },
});

@graphql(GET_COUNTER, { name: 'counter' })

class Navigation extends Component<Props, State> {
  getActiveRoute(path) {
    const { location } = this.props;
    return location.pathname === path ? 'secondary' : 'default';
  }

  navigateTo(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const { counter, classes } = this.props;

    return (
      <nav>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <div>
              <Button
                color={this.getActiveRoute('/')}
                onClick={() => this.navigateTo('/')}
              >
                Home
              </Button>
              <Button
                color={this.getActiveRoute('/users')}
                onClick={() => this.navigateTo('/users')}
              >
                Users
              </Button>
              <Button
                color={this.getActiveRoute('/profile')}
                onClick={() => this.navigateTo('/profile')}
              >
                Profile
              </Button>
              <Button
                color={this.getActiveRoute('/about')}
                onClick={() => this.navigateTo('/about')}
              >
                About
              </Button>
            </div>
            <IconButton color="inherit">
              <Badge badgeContent={counter?.counter?.value} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

export default withStyles(styles)(withRouter(Navigation));
