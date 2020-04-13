import React, { lazy, Suspense } from 'react';

const LazySignalGraph = lazy(() => import('./SignalGraph'));

const SignalGraph = props => (
  <Suspense fallback={null}>
    <LazySignalGraph {...props} />
  </Suspense>
);

export default SignalGraph;
