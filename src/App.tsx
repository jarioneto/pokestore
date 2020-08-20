import React, { FC, Suspense } from 'react';

// Third party
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Components
import Loader from 'core/components/Loader';

// Styles
import 'react-toastify/dist/ReactToastify.css';

const StoreFire = React.lazy(() => import('./stores/fire'));
const StoreDragon = React.lazy(() => import('./stores/dragon'));
const StoreWater = React.lazy(() => import('./stores/water'));

const App: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route path="/" exact component={StoreFire} />
          <Route path="/fire" component={StoreFire} />
          <Route path="/dragon" component={StoreDragon} />
          <Route path="/water" component={StoreWater} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
