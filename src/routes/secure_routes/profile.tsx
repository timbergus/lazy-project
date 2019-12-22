// @flow

import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { MyContext, Context } from '../../titles.provider';

import { GET_COUNTER, MODIFY_COUNTER } from '../../apollo/queries';

export default () => {
  const { data } = useQuery(GET_COUNTER);
  const [modifyCounter] = useMutation(MODIFY_COUNTER);

  return (
    <MyContext.Consumer>
      {
        (context: Context) => (
          <>
            <Typography variant="h2" component="h1" style={{ marginTop: '20px' }}>
              {context?.state?.titles?.profile}
            </Typography>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Count
                </Typography>
                <Typography variant="h3" component="h2">
                  {data?.counter?.value}
                </Typography>
              </CardContent>
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
            </Card>
          </>
        )
      }
    </MyContext.Consumer>
  );
};
