import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import { delay } from './utils/tools';
import typeDefs from './schema.graphql';

const COUNTER = gql`
  query COUNTER {
    counter {
      value
    }
  }
`;

const defaults = {
  counter: {
    __typename: 'Counter',
    value: 0,
  },
};

const resolvers = {
  Query: {
    info: async () => delay(2000, {
      __typename: 'Info',
      message: 'Hello World!',
    }),
  },
  Mutation: {
    modifyCounter: (_, { amount }, { cache }) => {
      const { counter } = cache.readQuery({
        query: COUNTER,
      });
      cache.writeData({
        data: {
          counter: {
            ...counter,
            value: counter.value + amount,
          },
        },
      });
    },
  },
};

export default new ApolloClient({
  uri: 'https://eu1.prisma.sh/gustavo-munoz-ef7b58/sick-fits/dev',
  clientState: {
    typeDefs,
    defaults,
    resolvers,
  },
});
