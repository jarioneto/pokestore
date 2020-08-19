import { ICartItem } from 'core/types/cart';

export const mockCartItems: ICartItem[] = [
  {
    product: {
      id: 4,
      name: 'charmander',
      image: '004.png',
      price: 40,
      discount: 1
    },
    quantity: 1
  },
  {
    product: {
      id: 5,
      name: 'charmeleon',
      image: '005.png',
      price: 50,
      discount: 2
    },
    quantity: 1
  },
  {
    product: {
      id: 6,
      name: 'charizard',
      image: '006.png',
      price: 60,
      discount: 4
    },
    quantity: 1
  }
];
