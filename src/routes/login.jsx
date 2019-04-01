// Playing with hooks. There is no need to use a class to use the state.

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
    <>
      <Typography variant="h2" component="h1" style={{ marginTop: '20px' }}>
        Login
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
      </div>
    </>
  );
};
