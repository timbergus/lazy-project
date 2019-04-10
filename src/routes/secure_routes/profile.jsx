// @flow

import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { MyContext } from '../../titles.provider';

import { GET_COUNTER, MODIFY_COUNTER } from '../../apollo/queries';

type Props = {
  counter: Object,
  modifyCounter: Function,
}

@graphql(GET_COUNTER, { name: 'counter' })
@graphql(MODIFY_COUNTER, { name: 'modifyCounter' })

class Profile extends Component<Props> {
  render() {
    const { counter, modifyCounter } = this.props;
    return (
      <>
        <MyContext.Consumer>
          {
            context => (
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
                      {counter?.counter?.value}
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
      </>
    );
  }
}

export default Profile;
