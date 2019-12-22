import gql from 'graphql-tag';

export const GET_INFO = gql`
  query GET_INFO {
    info @client {
      message
    }
  }
`;

export const GET_COUNTER = gql`
  query GET_COUNTER {
    counter {
      value
    }
  }
`;

export const MODIFY_COUNTER = gql`
  mutation MODIFY_COUNTER($amount: Int!) {
    modifyCounter(amount: $amount) @client {
      value
    }
  }
`;

export const GET_USERS = gql`
  query GET_USERS {
    users {
      id
      name
    }
  }
`;

export const GET_CREDENTIALS = gql`
  query GET_CREDENTIALS {
    credentials @client {
      username
      password
    }
  }
`;

export const MODIFY_CREDENTIALS = gql`
  mutation MODIFY_COUNTER($username: String!, $password: String!) {
    modifyCredentials(username: $username, password: $password) @client {
      username
      password
    }
  }
`;
