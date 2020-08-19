import React from 'react';

// RTL
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Cart from './Cart';

// Mocks
import MockedStoreProvider, {
  mockedContextValue
} from '../../../../__mocks__/providers/MockedStoreProvider';

import { mockCartItems } from '../../../../__mocks__/data/cart';

const defaultProps = {
  value: mockedContextValue
};

const renderComponent = (props = defaultProps) =>
  render(
    <MockedStoreProvider {...props}>
      <Cart />
    </MockedStoreProvider>
  );

describe('Cart component', () => {
  test('Should render cart without items', () => {
    renderComponent();

    expect(screen.getByRole('heading', { name: 'Carrinho' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /total/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /finalizar/i })).toBeInTheDocument();
    expect(screen.getByText(/carrinho vazio/i)).toBeInTheDocument();
  });

  test('Should render Cart with items', () => {
    const props = {
      value: {
        ...defaultProps.value,
        cart: {
          ...defaultProps.value.cart,
          items: mockCartItems
        }
      }
    };

    renderComponent(props);

    expect(screen.getByRole('img', { name: /charizard/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /charizard/i })).toBeInTheDocument();
  });

  test('Should remove item from cart', () => {
    const props = {
      value: {
        ...defaultProps.value,
        cart: {
          ...defaultProps.value.cart,
          items: mockCartItems
        }
      }
    };

    renderComponent(props);

    expect(screen.getByRole('heading', { name: /charmander/i })).toBeInTheDocument();

    const removeButton = screen.getAllByRole('button', { name: /trash/ })[0];
    userEvent.click(removeButton);

    expect(screen.queryByRole('heading', { name: /charmander/i })).not.toBeInTheDocument();
  });

  test('Should finish order', () => {
    const props = {
      value: {
        ...defaultProps.value,
        cart: {
          ...defaultProps.value.cart,
          items: mockCartItems
        }
      }
    };

    renderComponent(props);

    const finishButton = screen.getByRole('button', { name: /finalizar/i });
    userEvent.click(finishButton);

    // expect if clear cart
    expect(screen.queryByRole('heading', { name: /charmander/i })).not.toBeInTheDocument();

    // expect show modal
    expect(screen.getByRole('heading', { name: /compra finalizada/i })).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /fechar/i });
    userEvent.click(closeButton);

    // expect close modal
    expect(screen.queryByRole('heading', { name: /compra finalizada/i })).not.toBeInTheDocument();
  });
});
