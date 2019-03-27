import ApolloClient, { InMemoryCache } from 'apollo-boost';

import { delay } from './utils/tools';

export default new ApolloClient({
  cache: new InMemoryCache(),
  resolvers: {
    Query: {
      info: async () => delay(2000, {
        __typename: 'Info',
        message: 'Hello World!',
      }),
    },
  },
});
