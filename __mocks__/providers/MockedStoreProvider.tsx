import React from 'react';

// Types
import { IStore } from 'core/types/store';

// Contexts
import StoreComtext, { initialContext } from 'core/contexts/StoreContext';

interface IProps {
  value?: IStore;
}

const MockedStoreProvider: React.FC<IProps> = ({ children, value = initialContext }) => {
  return <StoreComtext.Provider value={value}>{children}</StoreComtext.Provider>;
};

export { initialContext as mockedContextValue };
export default MockedStoreProvider;
