import React, { createContext, useState } from 'react';

// Types
import { IStore } from 'core/types/store';
import { ICart } from 'core/types/cart';
import { ICatalog } from 'core/types/catalog';

interface IProps {
  value: IStore;
}

export const initialContext: IStore = {
  cart: {
    items: [],
    amount: 0
  },
  catalog: {
    items: [],
    currentItems: [],
    filter: '',
    page: 1,
    hasNextPage: true
  },
  setCart: () => {},
  setCatalog: () => {}
};

const Context = createContext<IStore>(initialContext);

const Provider: React.FC<IProps> = ({ children, value }) => {
  const [cart, setCart] = useState<ICart>(value.cart);
  const [catalog, setCatalog] = useState<ICatalog>(value.catalog);

  const contextValue = {
    cart,
    setCart,
    catalog,
    setCatalog
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default { Context, Provider };
