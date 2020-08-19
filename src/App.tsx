import React, { FC, Suspense } from 'react';

// Third party
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Components
import Loader from 'core/components/Loader';

const StoreFire = React.lazy(() => import('./stores/fire'));

const App: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route path="/" exact component={StoreFire} />
          <Route path="/fire" component={StoreFire} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
