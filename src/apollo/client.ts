import ApolloClient from 'apollo-boost';

import { delay } from '../utils/tools';
import typeDefs from './schema.graphql';

import { GET_COUNTER, GET_CREDENTIALS } from './queries';

const defaults = {
  counter: {
    __typename: 'Counter',
    value: 0,
  },
  credentials: {
    __typename: 'Credentials',
    username: '',
    password: '',
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
    modifyCounter: (
      _: any,
      { amount }: { amount: number },
      { cache }: { cache: any },
    ) => {
      const { counter } = cache.readQuery({
        query: GET_COUNTER,
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
    modifyCredentials: (
      _: any,
      { username, password }: { username: string, password: string },
      { cache }: { cache: any },
    ) => {
      const { credentials } = cache.readQuery({
        query: GET_CREDENTIALS,
      });

      cache.writeData({
        data: {
          credentials: {
            ...credentials,
            username,
            password,
          },
        },
      });
    },
  },
};

export default new ApolloClient({
  uri: 'https://eu1.prisma.sh/gustavo-munoz-ef7b58/lazy-project-server/dev',
  clientState: {
    resolvers,
    defaults,
    // Only used for introspection in Apollo Client DevTools.
    typeDefs,
  },
});
