import React from 'react';

// Third party
import { ThemeContext } from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Contexts
import StoreComtext, { initialContext } from 'core/contexts/StoreContext';

// Routes
import Routes from './routes';

// Styles
import theme from './styles/theme';
import GlobalStyle from './styles/global';

const Store: React.FC<RouteComponentProps> = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      <StoreComtext.Provider value={initialContext}>
        <Routes {...props} />
        <GlobalStyle />
        <ToastContainer />
      </StoreComtext.Provider>
    </ThemeContext.Provider>
  );
};

export default Store;
