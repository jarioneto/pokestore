import { useContext } from 'react';

// Types
import { IProduct } from 'core/types/product';
import { ICart, ICartItem } from 'core/types/cart';

// Context
import StoreContext from 'core/contexts/StoreContext';

interface IUseCart {
  items: ICartItem[];
  amount: number;
  addItem: (product: IProduct) => void;
  removeItem: (productId: number) => void;
  removeAll: () => void;
}

const useCart = (): IUseCart => {
  const { cart, setCart } = useContext(StoreContext.Context);
  const { items, amount } = cart;

  const getAmount = (cartItems: ICartItem[]): number => {
    let newAmount = 0;

    cartItems.forEach((item) => {
      newAmount += item.product.price * item.quantity;
    });

    return newAmount;
  };

  const findItem = (id: number): number => {
    const result = items.findIndex((item) => item.product.id === id);

    return result;
  };

  const addItem = (product: IProduct) => {
    let newItems: ICartItem[];

    const newItem: ICartItem = {
      product,
      quantity: 1
    };

    const cartItemId = findItem(product.id);

    if (cartItemId > -1) {
      const cartItem = items[cartItemId];

      newItem.quantity += cartItem.quantity;
      newItems = items;

      newItems.splice(cartItemId, 1, newItem);
    } else {
      newItems = [...items, newItem];
    }

    const newCart: ICart = {
      items: newItems,
      amount: getAmount(newItems)
    };

    setCart(newCart);
  };

  const removeItem = (productId: number) => {
    const updateItems = items.filter((item) => item.product.id !== productId);

    const newCart: ICart = {
      items: updateItems,
      amount: getAmount(updateItems)
    };

    setCart(newCart);
  };

  const removeAll = () => {
    const emptyCart: ICart = {
      items: [],
      amount: 0
    };

    setCart(emptyCart);
  };

  return { items, amount, addItem, removeItem, removeAll };
};

export default useCart;
