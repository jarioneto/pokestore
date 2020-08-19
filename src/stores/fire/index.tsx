import React from 'react';

// Third party
import { RouteComponentProps } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Contexts
import StoreComtext, { initialContext } from 'core/contexts/StoreContext';

// Routes
import Routes from './routes';

// Styles
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

const Store: React.FC<RouteComponentProps> = (props) => {
  return (
    <StoreComtext.Provider value={initialContext}>
      <Routes {...props} />
      <GlobalStyle />
      <ToastContainer />
    </StoreComtext.Provider>
  );
};

export default Store;
