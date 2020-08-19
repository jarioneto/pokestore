import React from 'react';

// Third party
import { RouteComponentProps } from 'react-router-dom';

// Contexts
import StoreComtext, { initialContext } from 'core/contexts/StoreContext';

// Routes
import Routes from './routes';

// Styles
import GlobalStyle from './styles/global';

const Store: React.FC<RouteComponentProps> = (props) => {
  return (
    <StoreComtext.Provider value={initialContext}>
      <Routes {...props} />
      <GlobalStyle />
    </StoreComtext.Provider>
  );
};

export default Store;
