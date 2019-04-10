// Playing with hooks. There is no need to use a class to use the state.

import React, { useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { GET_CREDENTIALS } from '../../apollo/queries';

export default () => {
  const [name, setName] = useState('Harry');
  const [surname, setSurname] = useState('Potter');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeSurname(e) {
    setSurname(e.target.value);
  }

  return (
    <ApolloConsumer>
      {(client) => {
        const { credentials } = client.readQuery({ query: GET_CREDENTIALS });
        const { username, password } = credentials;

        return (
          <>
            <Typography variant="h2" component="h1" style={{ marginTop: '20px' }}>
              Users
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                id="outlined-name"
                label="Name"
                value={name}
                onChange={handleChangeName}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-surname"
                label="Surname"
                value={surname}
                onChange={handleChangeSurname}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-username"
                label="Username"
                value={username}
                margin="normal"
                variant="outlined"
                disabled
              />
              <TextField
                id="outlined-password"
                label="Password"
                type="password"
                value={password}
                margin="normal"
                variant="outlined"
                disabled
              />
            </div>
          </>
        );
      }}
    </ApolloConsumer>
  );
};
