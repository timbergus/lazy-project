// @flow

import React, { lazy, Suspense } from 'react';

import { LoadStateComponent } from './load-state';
import { routeMinDelay } from '../utils/tools';

// ! https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay

type Props = {
  page: string,
};

export default (props: Props) => {
  const { page } = props;

  // ! Normal request. Use in production.
  // const LazyComponent = lazy(() => import(`../routes/${page}`));

  // ! Just for testing (2 seconds delay when loading).
  const LazyComponent = lazy(() => routeMinDelay(page, 2000));

  return (
    <Suspense fallback={<LoadStateComponent />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
