import React from 'react';
import { Query } from 'react-apollo';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { LoadStateClient } from '../components/load-state';

import { GET_INFO } from '../utils/queries';

export default () => (
  <>
    <Typography variant="h2" component="h1" style={{ marginTop: '20px' }}>
      Home
    </Typography>
    <Card style={{ marginTop: '20px' }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          And the message is...
        </Typography>
        <Query query={GET_INFO}>
          {
            ({ loading, error, data }) => {
              if (loading) return <LoadStateClient />;
              if (error) return `Error! ${error.message}`;
              return (
                <Typography variant="h5" component="h2">
                  {`${data?.info?.message}`}
                </Typography>
              );
            }
          }
        </Query>
      </CardContent>
    </Card>
  </>
);
