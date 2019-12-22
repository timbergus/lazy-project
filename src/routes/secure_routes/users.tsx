// @flow

import React, { useState, ChangeEvent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { GET_CREDENTIALS } from '../../apollo/queries';

export default () => {
  const [name, setName] = useState('Harry');
  const [surname, setSurname] = useState('Potter');

  const { data } = useQuery(GET_CREDENTIALS);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'surname':
        setSurname(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Typography variant="h2" component="h1" style={{ marginTop: '20px' }}>
        Users
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          id="outlined-name"
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-surname"
          label="Surname"
          name="surname"
          value={surname}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-username"
          label="Username"
          value={data?.credentials?.username}
          margin="normal"
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined-password"
          label="Password"
          type="password"
          value={data?.credentials?.password}
          margin="normal"
          variant="outlined"
          disabled
        />
      </div>
    </>
  );
};
