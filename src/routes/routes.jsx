import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import uuidv1 from 'uuid/v1';

import universal from 'react-universal-component';
import Loadable from 'react-loadable';
import loadable from '@loadable/component';

// Utils.
import { LoadStateComponent } from '../components/load-state';
import { delay } from '../utils/tools';

// ! Universal components.

const UniversalComponent = universal(props => import(`./${props.page}`), {
  loading: <LoadStateComponent />,
});

// ? React loadable.

const Home = Loadable({
  loader: async () => {
    await delay(1500, {});
    return import('./home');
  },
  loading: LoadStateComponent,
});

// ? React lazy tools.

const AboutLazy = lazy(() => import('./about'));

const About = props => (
  <Suspense fallback={<LoadStateComponent />}>
    <AboutLazy {...props} />
  </Suspense>
);

// ? Loadable component.

const Profile = loadable(() => import('./profile'));

const pages = ['users'];

export default () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    {/* This universal component can be generated using a list of routes */}
    {
      pages.map(page => (
        <Route
          key={uuidv1()}
          path={`/${page}`}
          component={props => <UniversalComponent {...props} page={page} />}
        />
      ))
    }
    {/* @loadable/component is not as expected */}
    <Route path="/profile" component={props => <Profile {...props} />} />
  </>
);
