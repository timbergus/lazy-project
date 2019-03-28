// @flow

import React, { Component } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

type Props = {
  history: Array<string>,
  location: Object,
}

type State = {
  color: string,
}

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
    return (
      <nav>
        <AppBar position="static" color="default">
          <Toolbar>
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
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

export default withRouter(Navigation);
