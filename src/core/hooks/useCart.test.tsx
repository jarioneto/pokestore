// RTL
import { renderHook, act } from '@testing-library/react-hooks';

// Types
import { IProduct } from 'core/types/product';

// Hook
import useCart from './useCart';

// Mocks
import { mockedContextValue } from '../../../__mocks__/providers/MockedStoreProvider';

const mockSetCart = jest.fn();

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return {
    ...actualReact,
    useContext: () => ({
      ...mockedContextValue,
      setCart: mockSetCart
    })
  };
});

describe('useCart hook', () => {
  beforeEach(() => {
    mockSetCart.mockClear();
  });

  test('Should add item to cart', () => {
    const { result } = renderHook(() => useCart());

    const product: IProduct = {
      id: 37,
      name: 'vulpix',
      image: '037.png',
      price: 37,
      discount: 1
    };

    act(() => {
      result.current.addItem(product);
    });

    const expectedValue = {
      amount: 37,
      items: [
        {
          product: { discount: 1, id: 37, image: '037.png', name: 'vulpix', price: 37 },
          quantity: 1
        }
      ]
    };

    expect(mockSetCart).toBeCalledWith(expectedValue);
  });

  test('Should remove item to cart', () => {
    const { result } = renderHook(() => useCart());

    const product: IProduct = {
      id: 37,
      name: 'vulpix',
      image: '037.png',
      price: 37,
      discount: 1
    };

    act(() => {
      result.current.addItem(product);
    });

    mockSetCart.mockClear();

    act(() => {
      result.current.removeItem(37);
    });

    const expectedValue = {
      amount: 0,
      items: []
    };

    expect(mockSetCart).toBeCalledWith(expectedValue);
  });

  test('Should clear cart', () => {
    const { result } = renderHook(() => useCart());

    const product: IProduct = {
      id: 37,
      name: 'vulpix',
      image: '037.png',
      price: 37,
      discount: 1
    };

    act(() => {
      result.current.addItem(product);
    });

    mockSetCart.mockClear();

    act(() => {
      result.current.removeAll();
    });

    const expectedValue = {
      amount: 0,
      items: []
    };

    expect(mockSetCart).toBeCalledWith(expectedValue);
  });
});
