import { ICatalog } from './catalog';
import { ICart } from './cart';

export interface IStore {
  cart: ICart;
  catalog: ICatalog;
  setCart: (cart: ICart) => void;
  setCatalog: (cart: ICatalog) => void;
}
