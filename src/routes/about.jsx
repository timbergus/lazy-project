import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const COUNTER = gql`
  query COUNTER {
    counter @client {
      value
    }
  }
`;

const MODIFY_COUNTER = gql`
  mutation MODIFY_COUNTER($amount: Int!) {
    modifyCounter(amount: $amount) @client {
      value
    }
  }
`;

export default () => (
  <>
    <Typography variant="h2" component="h1" style={{ marginTop: '20px' }}>
      About
    </Typography>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Count
        </Typography>
        <Typography variant="h3" component="h2">
          <Query query={COUNTER}>
            {
              ({ data }) => `${data?.counter?.value}`
            }
          </Query>
        </Typography>
      </CardContent>
      <Mutation mutation={MODIFY_COUNTER}>
        {
          modifyCounter => (
            <CardActions>
              <Fab
                size="small"
                color="primary"
                aria-label="Increment"
                onClick={() => modifyCounter({
                  variables: {
                    amount: 1,
                  },
                })}
              >
                <AddIcon />
              </Fab>
              <Fab
                size="small"
                color="secondary"
                aria-label="Decrement"
                onClick={() => modifyCounter({
                  variables: {
                    amount: -1,
                  },
                })}
              >
                <RemoveIcon />
              </Fab>
            </CardActions>
          )
        }
      </Mutation>
    </Card>
  </>
);
