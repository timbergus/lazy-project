// @flow

import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

import Routes from './routes';
import Navigation from '../components/navigation';

import { GET_CREDENTIALS } from '../apollo/queries';

export default () => {
  const { data } = useQuery(GET_CREDENTIALS);

  if (data?.credentials?.username && data?.credentials?.password) {
    return (
      <>
        <Navigation />
        <Routes />
      </>
    );
  }

  return <Redirect to={{ pathname: '/login' }} />;
};
