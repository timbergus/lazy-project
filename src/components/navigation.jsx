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
import ExitToApp from '@material-ui/icons/ExitToApp';

import { GET_COUNTER, MODIFY_CREDENTIALS } from '../apollo/queries';

type Props = {
  history: Array<string>,
  location: Object,
  counter: Object,
  classes: Object,
  modifyCredentials: Function,
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
@graphql(MODIFY_CREDENTIALS, { name: 'modifyCredentials' })

class Navigation extends Component<Props, State> {
  getActiveRoute(path) {
    const { location } = this.props;
    return location.pathname === path ? 'secondary' : 'default';
  }

  logout = () => {
    const { history } = this.props;
    history.push('/login');
  }

  navigateTo(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const {
      counter,
      modifyCredentials,
      classes,
      history,
    } = this.props;

    return (
      <nav>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <div>
              <Button
                color={this.getActiveRoute('/secure/home')}
                onClick={() => this.navigateTo('/secure/home')}
              >
                Home
              </Button>
              <Button
                color={this.getActiveRoute('/secure/users')}
                onClick={() => this.navigateTo('/secure/users')}
              >
                Users
              </Button>
              <Button
                color={this.getActiveRoute('/secure/profile')}
                onClick={() => this.navigateTo('/secure/profile')}
              >
                Profile
              </Button>
              <Button
                color={this.getActiveRoute('/secure/about')}
                onClick={() => this.navigateTo('/secure/about')}
              >
                About
              </Button>
            </div>
            <div>
              <IconButton color="inherit">
                <Badge badgeContent={counter?.counter?.value} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                onClick={() => modifyCredentials({
                  variables: {
                    username: '',
                    password: '',
                  },
                  update: () => history.push('/login'),
                })}
                color="inherit"
              >
                <ExitToApp />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

export default withStyles(styles)(withRouter(Navigation));
