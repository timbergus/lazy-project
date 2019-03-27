import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import universal from 'react-universal-component';
import Loadable from 'react-loadable';
import loadable from '@loadable/component';

// Loading element.
import { LoadStateComponent } from '../components/load-state';

// React loadable.
const Home = Loadable({
  loader: () => import('./home'),
  loading: LoadStateComponent,
});

// React lazy tools.
const AboutLazy = lazy(() => import(/* webpackChunkName: 'about' */ './about'));

const About = props => (
  <Suspense fallback={<LoadStateComponent />}>
    <AboutLazy {...props} />
  </Suspense>
);

// Universal components.
const Users = universal(() => import(/* webpackChunkName: 'users' */ './users'), {
  loading: <LoadStateComponent />,
});

// Loadable component.
const Profile = loadable(() => import('./profile'), {
  fallback: <LoadStateComponent />,
});

export default () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/users" component={Users} />
    <Route path="/profile" component={Profile} />
  </>
);
