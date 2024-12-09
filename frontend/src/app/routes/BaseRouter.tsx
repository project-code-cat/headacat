import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import PageLoader from './PageLoader';
import BaseLayout from '../layout/BaseLayout';
import { publicRoutes } from './allRoutes';
import RouteChangeTracker from './RouteChangeTracker';

// const noLayoutPages = ['/login', '/logout', '/error'];

const BaseRoutes = () => {
  // const nodeRef = React.useRef(null);
  const location = useLocation();
  // const currentKey = location.pathname.split('/')[1] || '/';
  // const timeout = {enter: 500, exit: 500};

  RouteChangeTracker();

  return (
    <BaseLayout>
      <TransitionGroup>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            {publicRoutes.map((route, idx) => {
              return (
                <Route path={route.path} key={idx} element={route.component} />
              );
            })}
          </Routes>
        </Suspense>
      </TransitionGroup>
    </BaseLayout>
  );
};

export default BaseRoutes;
