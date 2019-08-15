// @flow

// Playing with hooks. There is no need to use a class to use the state.

import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import StyledLogin from './login.styled';

import { MODIFY_CREDENTIALS } from '../apollo/queries';

type Props = {
  history: Object,
}

export default (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <Mutation mutation={MODIFY_CREDENTIALS}>
      {
        (modifyCredentials) => (
          <StyledLogin>
            <TextField
              label="Username"
              value={username}
              onChange={handleChangeUsername}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              value={password}
              type="password"
              onChange={handleChangePassword}
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
                update: () => props.history.push('/secure/home'),
              })}
            >
              Login
            </Button>
          </StyledLogin>
        )
      }
    </Mutation>
  );
};
