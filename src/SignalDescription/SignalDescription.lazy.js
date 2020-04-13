import React, { lazy, Suspense } from 'react';

const LazySignalDescription = lazy(() => import('./SignalDescription'));

const SignalDescription = props => (
  <Suspense fallback={null}>
    <LazySignalDescription {...props} />
  </Suspense>
);

export default SignalDescription;
