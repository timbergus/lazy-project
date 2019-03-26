import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import universal from 'react-universal-component';
import Loadable from 'react-loadable';
import loadable from '@loadable/component';

// Loading element.
import Loading from '../components/loading';

// React loadable.
const Home = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});

// React lazy tools.
const AboutLazy = lazy(() => import(/* webpackChunkName: 'about' */ './about'));

const About = props => (
  <Suspense fallback={<Loading />}>
    <AboutLazy {...props} />
  </Suspense>
);

// Universal components.
const Users = universal(() => import(/* webpackChunkName: 'users' */ './users'), {
  loading: <Loading />,
});

// Loadable component.
const Profile = loadable(() => import('./profile'));

export default () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/users" component={Users} />
    <Route path="/profile" component={Profile} />
  </>
);
