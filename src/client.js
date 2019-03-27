import ApolloClient, { InMemoryCache } from 'apollo-boost';

const delay = (time, data) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, time);
});

export default new ApolloClient({
  cache: new InMemoryCache(),
  resolvers: {
    Query: {
      info: async () => delay(5000, {
        __typename: 'Info',
        message: 'Hello World!',
      }),
    },
  },
});
