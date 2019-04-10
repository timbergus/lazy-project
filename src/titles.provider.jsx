// @flow

// https://www.youtube.com/watch?v=XLJN4JfniH4

import React, { createContext } from 'react';

type Props = {
  children: Object,
}

// Using context.
export const MyContext = createContext<Object>();

export default (props: Props) => {
  const titles = {
    home: 'Home',
    users: 'Users',
    profile: 'Profile',
    about: 'About',
  };
  const { children } = props;
  return (
    <MyContext.Provider value={{ state: { titles } }}>
      {children}
    </MyContext.Provider>
  );
};
