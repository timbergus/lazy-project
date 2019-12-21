import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { LoadStateClient } from '../../components/load-state';

import { GET_INFO } from '../../apollo/queries';

export default () => {
  const { loading, error, data } = useQuery(GET_INFO);

  const getContents = () => {
    if (loading) {
      return <LoadStateClient />;
    }

    if (error) {
      return (
        <Typography variant="h5" component="h2">
          {`Error! ${error.message}`}
        </Typography>
      );
    }

    return (
      <Typography variant="h5" component="h2">
        {`${data?.info?.message}`}
      </Typography>
    );
  };

  return (
    <>
      <Typography variant="h2" component="h1" style={{ marginTop: '20px' }}>
        Home
      </Typography>
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            And the message is...
          </Typography>
          {getContents()}
        </CardContent>
      </Card>
    </>
  );
};
