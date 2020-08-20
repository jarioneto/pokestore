import React from 'react';

// RTL
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

// Components
import Home from './Home';

// Services
import http from 'core/services/http';

// Third party
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';

// Mocks
import MockedStoreProvider, {
  mockedContextValue
} from '../../../../../__mocks__/providers/MockedStoreProvider';

import { mockResponseWater } from '../../../../../__mocks__/api/water';

// Inifinite scroll Mock
jest.mock('react-infinite-scroller', () => ({ loadMore, children }: any) => {
  global.addEventListener('scroll', () => loadMore());

  return <div>{children}</div>;
});

const axiosMock = new MockAdapter(http);

const defaultProps = {
  value: mockedContextValue
};

const renderComponent = (props = defaultProps) =>
  render(
    <MockedStoreProvider {...props}>
      <Home />
    </MockedStoreProvider>
  );

describe('Home component', () => {
  test('Should render the componet', async () => {
    axiosMock.onGet('/type/water').reply(200, { ...mockResponseWater });

    renderComponent();

    // header
    expect(screen.getByRole('img', { name: /pokéstore/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /pokéstore/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();

    // catalog
    const catalog = await waitFor(() => screen.getByTestId('catalog'));

    fireEvent.scroll(global.window, { target: { scrollY: 100 } });

    // cart
    expect(screen.getByRole('heading', { name: /total/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /finalizar/i })).toBeInTheDocument();
    expect(screen.getByText(/carrinho vazio/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(catalog.firstChild?.childNodes).toHaveLength(15);
    });
  });

  test('Should add product to cart', async () => {
    axiosMock.onGet('/type/water').reply(200, { ...mockResponseWater });

    renderComponent();

    await waitFor(() => {
      screen.getByTestId('catalog');
    });

    fireEvent.scroll(global.window, { target: { scrollY: 100 } });

    const buttonAddToCart = screen.getAllByRole('button', { name: /comprar/i })[0];
    userEvent.click(buttonAddToCart);

    const cartItems = screen.getAllByTestId('cart-item');

    expect(cartItems).toHaveLength(1);
  });

  test('Should remove item to cart', async () => {
    axiosMock.onGet('/type/water').reply(200, { ...mockResponseWater });

    renderComponent();

    await waitFor(() => {
      screen.getByTestId('catalog');
    });

    fireEvent.scroll(global.window, { target: { scrollY: 100 } });

    const buttonAddToCart = screen.getAllByRole('button', { name: /comprar/i })[0];
    userEvent.click(buttonAddToCart);

    expect(screen.getAllByTestId('cart-item')).toHaveLength(1);

    const buttonRemoveToCart = screen.getByRole('button', { name: /trash/i });
    userEvent.click(buttonRemoveToCart);

    await waitFor(() => {
      expect(screen.queryByTestId('cart-item')).not.toBeInTheDocument();
    });
  });

  test('Should finish order', async () => {
    axiosMock.onGet('/type/water').reply(200, { ...mockResponseWater });

    renderComponent();

    await waitFor(() => {
      screen.getByTestId('catalog');
    });

    fireEvent.scroll(global.window, { target: { scrollY: 100 } });

    const buttonAddToCart = screen.getAllByRole('button', { name: /comprar/i })[0];
    userEvent.click(buttonAddToCart);

    const buttonFinish = screen.getByRole('button', { name: /finalizar/i });
    userEvent.click(buttonFinish);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  test('Should search product', async () => {
    axiosMock.onGet('/type/water').reply(200, { ...mockResponseWater });

    renderComponent();

    const catalog = await waitFor(() => screen.getByTestId('catalog'));

    fireEvent.scroll(global.window, { target: { scrollY: 100 } });

    const inputSearch = screen.getByRole('textbox');
    userEvent.type(inputSearch, 'squirtle');

    const buttonSearch = screen.getByRole('button', { name: /search/i });
    userEvent.click(buttonSearch);

    await waitFor(() => {
      expect(catalog.firstChild?.childNodes).toHaveLength(1);
    });
  });
});
