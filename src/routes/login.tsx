// @flow

// Playing with hooks. There is no need to use a class to use the state.

import React, { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import StyledLogin from './login.styled';

import { MODIFY_CREDENTIALS } from '../apollo/queries';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modifyCredentials] = useMutation(MODIFY_CREDENTIALS);

  const history = useHistory();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.currentTarget.name) {
      case 'username':
        setUsername(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <StyledLogin>
      <TextField
        label="Username"
        name="username"
        value={username}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        type="password"
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => modifyCredentials({
          variables: {
            username,
            password,
          },
          update: () => history.push('/secure/home'),
        })}
      >
        Login
      </Button>
    </StyledLogin>
  );
};
