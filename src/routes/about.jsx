import React from 'react';
import { Query, Mutation } from 'react-apollo';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { GET_COUNTER, MODIFY_COUNTER } from '../utils/queries';

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
          <Query query={GET_COUNTER}>
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
