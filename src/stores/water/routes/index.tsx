import React, { Suspense } from 'react';

// Third party
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  RouteComponentProps
} from 'react-router-dom';

// Components
import Loader from 'core/components/Loader';

const Home = React.lazy(() => import('../pages/Home'));

const Routes: React.FC<RouteComponentProps> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router basename="/water">
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
