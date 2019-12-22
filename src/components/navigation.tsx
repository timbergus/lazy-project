// @flow

import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';

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
  classes: any,
}

const styles = () => ({
  toolbar: {
    justifyContent: 'space-between',
  },
});

const Navigation = ({ classes }: Props) => {
  const { data } = useQuery(GET_COUNTER);
  const [modifyCredentials] = useMutation(MODIFY_CREDENTIALS);

  const history = useHistory();
  const location = useLocation();

  const getActiveRoute = (path: string) => (
    location.pathname === path ? 'secondary' : 'default'
  );

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <nav>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <div>
            <Button
              color={getActiveRoute('/secure/home')}
              onClick={() => navigateTo('/secure/home')}
            >
              Home
            </Button>
            <Button
              color={getActiveRoute('/secure/users')}
              onClick={() => navigateTo('/secure/users')}
            >
              Users
            </Button>
            <Button
              color={getActiveRoute('/secure/profile')}
              onClick={() => navigateTo('/secure/profile')}
            >
              Profile
            </Button>
            <Button
              color={getActiveRoute('/secure/about')}
              onClick={() => navigateTo('/secure/about')}
            >
              About
            </Button>
          </div>
          <div>
            <IconButton color="inherit">
              <Badge badgeContent={data?.counter?.value} color="secondary">
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
};

export default withStyles(styles)(Navigation);
